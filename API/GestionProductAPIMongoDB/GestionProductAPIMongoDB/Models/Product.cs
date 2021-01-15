using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionProductAPIMongoDB.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Libelle")]
        public string Libelle { get; set; }
        
        [BsonElement("Price")]
        public double Price { get; set; }

        [BsonElement("Qte")]
        public int Qte { get; set; }

    }
}
