using System.ComponentModel.DataAnnotations;

namespace QuickBuy.Dominio.Entidades

{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        [MinLength(10, ErrorMessage = "Name cannot be less than 10")]
        [MaxLength(50, ErrorMessage = "Name cannot be greater than 50")]
        public string Descricao { get; set; }
        [Required]
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do produto não foi informado");
            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição do produto não foi informada");
        }
    }
}
