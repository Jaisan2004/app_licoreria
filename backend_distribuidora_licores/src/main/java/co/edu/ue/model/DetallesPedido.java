package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the detalles_pedido database table.
 * 
 */
@Entity
@Table(name="detalles_pedido")
@NamedQuery(name="DetallesPedido.findAll", query="SELECT d FROM DetallesPedido d")
public class DetallesPedido implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="det_id")
	private int detId;

	@Column(name="cantidad")
	private int cantidad;

	@Column(name="precio_unitario")
	private BigDecimal precioUnitario;

	@Column(name="subtotal")
	private BigDecimal subtotal;

	//bi-directional many-to-one association to Pedido
	@ManyToOne
	@JoinColumn(name="ped_id")
	private Pedido pedido;

	//bi-directional many-to-one association to Producto
	@ManyToOne
	@JoinColumn(name="prod_id")
	private Producto producto;

	public DetallesPedido() {
	}

	public int getDetId() {
		return this.detId;
	}

	public void setDetId(int detId) {
		this.detId = detId;
	}

	public int getCantidad() {
		return this.cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public BigDecimal getPrecioUnitario() {
		return this.precioUnitario;
	}

	public void setPrecioUnitario(BigDecimal precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

	public BigDecimal getSubtotal() {
		return this.subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public Pedido getPedido() {
		return this.pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Producto getProducto() {
		return this.producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

}