using GestionProductAPIMongoDB.Models;
using GestionProductAPIMongoDB.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionProductAPIMongoDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService service)
        {
            _productService = service;
        }

        [HttpGet]
        public ActionResult<List<Product>> Get() =>
            _productService.Get();

        
        [HttpGet("{id}", Name = "GetProduct")]
        public ActionResult<Product> Get(string id)
        {
            var product = _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            _productService.Create(product);
            return CreatedAtRoute("GetProduct", new { id = product.Id.ToString() }, product);
        }

        [HttpPut("{id}")]
        public ActionResult<Product> Update(string id , Product product)
        {
            var newProduct = _productService.Get(id);

            if(newProduct == null)
            {
                return NotFound();
            }

            _productService.Update(id , product);

            return NoContent();

        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var product = _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }
                
            _productService.Remove(product.Id);

            return NoContent();
        }

        


    }
}
