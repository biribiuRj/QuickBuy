using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }
        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ///Classes de mapeamento
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData
            (
            new FormaPagamento() { Id = 1, Nome = "NaoDefinido", Descricao = "Não Definido" },
            new FormaPagamento() { Id = 2, Nome = "Boleto" , Descricao =  "Forma de Pgto Boleto" },
            new FormaPagamento() { Id = 3, Nome = "Cartão de Crédito", Descricao = "Forma de Pgto Cartao De Crédito" },
            new FormaPagamento() { Id = 4, Nome = "Depósito", Descricao = "Forma de Pgto Deposito" }
            );


            base.OnModelCreating(modelBuilder);
        }

    }
}
