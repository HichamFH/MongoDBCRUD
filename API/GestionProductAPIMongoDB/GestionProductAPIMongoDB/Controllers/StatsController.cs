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
    public class StatsController : ControllerBase
    {
        private readonly ProductService _productService;

        public StatsController(ProductService service)
        {
            _productService = service;
        }

        [HttpGet]
        public ActionResult<long> CountProduct() =>
           _productService.productCount();

        [HttpGet]
        [Route("CountPrice")]
        public ActionResult<long> ProductPriceGT() =>
           _productService.productCountPrice();

        [HttpGet]
        [Route("TotalPrice")]
        public ActionResult<double> TotalPrice() =>
           _productService.TotalProductPrice();
    }
}
