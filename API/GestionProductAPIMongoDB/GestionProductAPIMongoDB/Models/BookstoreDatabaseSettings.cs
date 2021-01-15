namespace GestionProductAPIMongoDB.Models
{
    public class GProductDatabaseSettings : IGProductDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

        public string ProductCollection { get; set; }
    }
}
