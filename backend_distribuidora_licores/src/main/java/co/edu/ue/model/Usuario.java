package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the usuarios database table.
 * 
 */
@Entity
@Table(name="usuarios")
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="usu_id")
	private int usuId;

	@Column(name="usu_apellido")
	private String usuApellido;

	@Column(name="usu_contrasena")
	private String usuContrasena;

	@Column(name="usu_email")
	private String usuEmail;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="usu_fecha_registro")
	private Date usuFechaRegistro;

	@Column(name="usu_nombre")
	private String usuNombre;

	@Column(name="usu_telefono")
	private String usuTelefono;

	//bi-directional many-to-one association to Direccione
	@OneToMany(mappedBy="usuario")
	private List<Direccione> direcciones;

	//bi-directional many-to-one association to Pedido
	@OneToMany(mappedBy="usuario")
	private List<Pedido> pedidos;

	public Usuario() {
	}

	public int getUsuId() {
		return this.usuId;
	}

	public void setUsuId(int usuId) {
		this.usuId = usuId;
	}

	public String getUsuApellido() {
		return this.usuApellido;
	}

	public void setUsuApellido(String usuApellido) {
		this.usuApellido = usuApellido;
	}

	public String getUsuContrasena() {
		return this.usuContrasena;
	}

	public void setUsuContrasena(String usuContrasena) {
		this.usuContrasena = usuContrasena;
	}

	public String getUsuEmail() {
		return this.usuEmail;
	}

	public void setUsuEmail(String usuEmail) {
		this.usuEmail = usuEmail;
	}

	public Date getUsuFechaRegistro() {
		return this.usuFechaRegistro;
	}

	public void setUsuFechaRegistro(Date usuFechaRegistro) {
		this.usuFechaRegistro = usuFechaRegistro;
	}

	public String getUsuNombre() {
		return this.usuNombre;
	}

	public void setUsuNombre(String usuNombre) {
		this.usuNombre = usuNombre;
	}

	public String getUsuTelefono() {
		return this.usuTelefono;
	}

	public void setUsuTelefono(String usuTelefono) {
		this.usuTelefono = usuTelefono;
	}

	public List<Direccione> getDirecciones() {
		return this.direcciones;
	}

	public void setDirecciones(List<Direccione> direcciones) {
		this.direcciones = direcciones;
	}

	public Direccione addDireccione(Direccione direccione) {
		getDirecciones().add(direccione);
		direccione.setUsuario(this);

		return direccione;
	}

	public Direccione removeDireccione(Direccione direccione) {
		getDirecciones().remove(direccione);
		direccione.setUsuario(null);

		return direccione;
	}

	public List<Pedido> getPedidos() {
		return this.pedidos;
	}

	public void setPedidos(List<Pedido> pedidos) {
		this.pedidos = pedidos;
	}

	public Pedido addPedido(Pedido pedido) {
		getPedidos().add(pedido);
		pedido.setUsuario(this);

		return pedido;
	}

	public Pedido removePedido(Pedido pedido) {
		getPedidos().remove(pedido);
		pedido.setUsuario(null);

		return pedido;
	}

}