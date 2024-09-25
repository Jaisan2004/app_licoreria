package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.List;


/**
 * The persistent class for the productos database table.
 * 
 */
@Entity
@Table(name="productos")
@NamedQuery(name="Producto.findAll", query="SELECT p FROM Producto p")
public class Producto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="prod_id")
	private int prodId;

	@Lob
	@Column(name="prod_descripcion")
	private String prodDescripcion;

	@Column(name="prod_nombre")
	private String prodNombre;

	@Column(name="prod_precio")
	private BigDecimal prodPrecio;

	@Column(name="prod_stock")
	private int prodStock;

	//bi-directional many-to-one association to DetallesPedido
	@OneToMany(mappedBy="producto")
	private List<DetallesPedido> detallesPedidos;

	//bi-directional many-to-one association to Categoria
	@ManyToOne
	@JoinColumn(name="cate_id")
	private Categoria categoria;

	public Producto() {
	}

	public int getProdId() {
		return this.prodId;
	}

	public void setProdId(int prodId) {
		this.prodId = prodId;
	}

	public String getProdDescripcion() {
		return this.prodDescripcion;
	}

	public void setProdDescripcion(String prodDescripcion) {
		this.prodDescripcion = prodDescripcion;
	}

	public String getProdNombre() {
		return this.prodNombre;
	}

	public void setProdNombre(String prodNombre) {
		this.prodNombre = prodNombre;
	}

	public BigDecimal getProdPrecio() {
		return this.prodPrecio;
	}

	public void setProdPrecio(BigDecimal prodPrecio) {
		this.prodPrecio = prodPrecio;
	}

	public int getProdStock() {
		return this.prodStock;
	}

	public void setProdStock(int prodStock) {
		this.prodStock = prodStock;
	}

	public List<DetallesPedido> getDetallesPedidos() {
		return this.detallesPedidos;
	}

	public void setDetallesPedidos(List<DetallesPedido> detallesPedidos) {
		this.detallesPedidos = detallesPedidos;
	}

	public DetallesPedido addDetallesPedido(DetallesPedido detallesPedido) {
		getDetallesPedidos().add(detallesPedido);
		detallesPedido.setProducto(this);

		return detallesPedido;
	}

	public DetallesPedido removeDetallesPedido(DetallesPedido detallesPedido) {
		getDetallesPedidos().remove(detallesPedido);
		detallesPedido.setProducto(null);

		return detallesPedido;
	}

	public Categoria getCategoria() {
		return this.categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

}