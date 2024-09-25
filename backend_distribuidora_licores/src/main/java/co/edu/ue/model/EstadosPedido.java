package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the estados_pedido database table.
 * 
 */
@Entity
@Table(name="estados_pedido")
@NamedQuery(name="EstadosPedido.findAll", query="SELECT e FROM EstadosPedido e")
public class EstadosPedido implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="est_id")
	private int estId;

	@Column(name="est_descripcion")
	private String estDescripcion;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="est_fecha_registro")
	private Date estFechaRegistro;

	//bi-directional many-to-one association to SeguimientoPedido
	@OneToMany(mappedBy="estadosPedido")
	private List<SeguimientoPedido> seguimientoPedidos;

	public EstadosPedido() {
	}

	public int getEstId() {
		return this.estId;
	}

	public void setEstId(int estId) {
		this.estId = estId;
	}

	public String getEstDescripcion() {
		return this.estDescripcion;
	}

	public void setEstDescripcion(String estDescripcion) {
		this.estDescripcion = estDescripcion;
	}

	public Date getEstFechaRegistro() {
		return this.estFechaRegistro;
	}

	public void setEstFechaRegistro(Date estFechaRegistro) {
		this.estFechaRegistro = estFechaRegistro;
	}

	public List<SeguimientoPedido> getSeguimientoPedidos() {
		return this.seguimientoPedidos;
	}

	public void setSeguimientoPedidos(List<SeguimientoPedido> seguimientoPedidos) {
		this.seguimientoPedidos = seguimientoPedidos;
	}

	public SeguimientoPedido addSeguimientoPedido(SeguimientoPedido seguimientoPedido) {
		getSeguimientoPedidos().add(seguimientoPedido);
		seguimientoPedido.setEstadosPedido(this);

		return seguimientoPedido;
	}

	public SeguimientoPedido removeSeguimientoPedido(SeguimientoPedido seguimientoPedido) {
		getSeguimientoPedidos().remove(seguimientoPedido);
		seguimientoPedido.setEstadosPedido(null);

		return seguimientoPedido;
	}

}