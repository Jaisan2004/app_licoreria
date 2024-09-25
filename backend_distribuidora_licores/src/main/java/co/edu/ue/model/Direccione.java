package co.edu.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;


/**
 * The persistent class for the direcciones database table.
 * 
 */
@Entity
@Table(name="direcciones")
@NamedQuery(name="Direccione.findAll", query="SELECT d FROM Direccione d")
public class Direccione implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="dir_id")
	private int dirId;

	@Column(name="dir_direccion")
	private String dirDireccion;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="dir_fecha_registro")
	private Date dirFechaRegistro;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="usu_id")
	private Usuario usuario;

	public Direccione() {
	}

	public int getDirId() {
		return this.dirId;
	}

	public void setDirId(int dirId) {
		this.dirId = dirId;
	}

	public String getDirDireccion() {
		return this.dirDireccion;
	}

	public void setDirDireccion(String dirDireccion) {
		this.dirDireccion = dirDireccion;
	}

	public Date getDirFechaRegistro() {
		return this.dirFechaRegistro;
	}

	public void setDirFechaRegistro(Date dirFechaRegistro) {
		this.dirFechaRegistro = dirFechaRegistro;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}