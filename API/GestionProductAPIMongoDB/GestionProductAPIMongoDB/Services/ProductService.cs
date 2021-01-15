using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionProductAPIMongoDB.Models;

namespace GestionProductAPIMongoDB.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IGProductDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductCollection);
        }

        
        public List<Product> Get() =>
            _products.Find(product => true).ToList();

        
        public Product Get(string id) =>
            _products.Find(product => product.Id == id).FirstOrDefault();

      
        public Product Create(Product product)
        {
            _products.InsertOne(product);
            return product;
        }

        
        public void Update(string id, Product product) =>
            _products.ReplaceOne(product => product.Id == id, product);

        
        public void Remove(string id) =>
            _products.DeleteOne(product => product.Id == id);

        public void Remove(Product productIn) =>
            _products.DeleteOne(product => product.Id == productIn.Id);

        public long productCount()
        {
            return _products.CountDocuments(product => true);
        }

        public long productCountPrice()
        {
            return _products.CountDocuments(product => product.Price > 100);
        }

        public double TotalProductPrice()
        {
            var myp = _products.Find(product => true).ToList();
            double total = 0;
            foreach (var item in myp)
            {
                total += item.Price * item.Qte;
            }
            return total;
        }
    }
}
