using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class CargaFormaPgto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[,]
                {
                    { 1, "Não Definido", "NaoDefinido" },
                    { 2, "Forma de Pgto Boleto", "Boleto" },
                    { 3, "Forma de Pgto Cartao De Crédito", "Cartão de Crédito" },
                    { 4, "Forma de Pgto Deposito", "Depósito" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
