namespace GestionProductAPIMongoDB.Models
{
    public interface IGProductDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

        string ProductCollection { get; set; }


    }
}
