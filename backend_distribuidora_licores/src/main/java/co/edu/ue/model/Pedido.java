package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the pedidos database table.
 * 
 */
@Entity
@Table(name="pedidos")
@NamedQuery(name="Pedido.findAll", query="SELECT p FROM Pedido p")
public class Pedido implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ped_id")
	private int pedId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="fecha_pedido")
	private Date fechaPedido;

	@Column(name="total_pedido")
	private BigDecimal totalPedido;

	//bi-directional many-to-one association to DetallesPedido
	@OneToMany(mappedBy="pedido")
	private List<DetallesPedido> detallesPedidos;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="usu_id")
	private Usuario usuario;

	//bi-directional many-to-one association to SeguimientoPedido
	@OneToMany(mappedBy="pedido")
	private List<SeguimientoPedido> seguimientoPedidos;

	public Pedido() {
	}

	public int getPedId() {
		return this.pedId;
	}

	public void setPedId(int pedId) {
		this.pedId = pedId;
	}

	public Date getFechaPedido() {
		return this.fechaPedido;
	}

	public void setFechaPedido(Date fechaPedido) {
		this.fechaPedido = fechaPedido;
	}

	public BigDecimal getTotalPedido() {
		return this.totalPedido;
	}

	public void setTotalPedido(BigDecimal totalPedido) {
		this.totalPedido = totalPedido;
	}

	public List<DetallesPedido> getDetallesPedidos() {
		return this.detallesPedidos;
	}

	public void setDetallesPedidos(List<DetallesPedido> detallesPedidos) {
		this.detallesPedidos = detallesPedidos;
	}

	public DetallesPedido addDetallesPedido(DetallesPedido detallesPedido) {
		getDetallesPedidos().add(detallesPedido);
		detallesPedido.setPedido(this);

		return detallesPedido;
	}

	public DetallesPedido removeDetallesPedido(DetallesPedido detallesPedido) {
		getDetallesPedidos().remove(detallesPedido);
		detallesPedido.setPedido(null);

		return detallesPedido;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<SeguimientoPedido> getSeguimientoPedidos() {
		return this.seguimientoPedidos;
	}

	public void setSeguimientoPedidos(List<SeguimientoPedido> seguimientoPedidos) {
		this.seguimientoPedidos = seguimientoPedidos;
	}

	public SeguimientoPedido addSeguimientoPedido(SeguimientoPedido seguimientoPedido) {
		getSeguimientoPedidos().add(seguimientoPedido);
		seguimientoPedido.setPedido(this);

		return seguimientoPedido;
	}

	public SeguimientoPedido removeSeguimientoPedido(SeguimientoPedido seguimientoPedido) {
		getSeguimientoPedidos().remove(seguimientoPedido);
		seguimientoPedido.setPedido(null);

		return seguimientoPedido;
	}

}