namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == 0)
                AdicionarCritica("Não foi Identificado a referência do Produto");

            if(Quantidade == 0)
            {
                AdicionarCritica("Quantidade não informada");
            }
        }
    }
}
