package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;


/**
 * The persistent class for the seguimiento_pedidos database table.
 * 
 */
@Entity
@Table(name="seguimiento_pedidos")
@NamedQuery(name="SeguimientoPedido.findAll", query="SELECT s FROM SeguimientoPedido s")
public class SeguimientoPedido implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="seg_id")
	private int segId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="seg_fecha_hora")
	private Date segFechaHora;

	//bi-directional many-to-one association to Pedido
	@ManyToOne
	@JoinColumn(name="ped_id")
	private Pedido pedido;

	//bi-directional many-to-one association to EstadosPedido
	@ManyToOne
	@JoinColumn(name="est_id")
	private EstadosPedido estadosPedido;

	public SeguimientoPedido() {
	}

	public int getSegId() {
		return this.segId;
	}

	public void setSegId(int segId) {
		this.segId = segId;
	}

	public Date getSegFechaHora() {
		return this.segFechaHora;
	}

	public void setSegFechaHora(Date segFechaHora) {
		this.segFechaHora = segFechaHora;
	}

	public Pedido getPedido() {
		return this.pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public EstadosPedido getEstadosPedido() {
		return this.estadosPedido;
	}

	public void setEstadosPedido(EstadosPedido estadosPedido) {
		this.estadosPedido = estadosPedido;
	}

}