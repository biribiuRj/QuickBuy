using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public ICollection <ItemPedido> ItemPedido { get; set; }
    }
}
