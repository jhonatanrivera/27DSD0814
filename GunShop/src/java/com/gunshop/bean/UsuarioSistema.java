/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.bean;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author AyJ
 */
@Entity
@Table(name = "USUARIO_SISTEMA")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UsuarioSistema.findAll", query = "SELECT u FROM UsuarioSistema u"),
    @NamedQuery(name = "UsuarioSistema.findByDni", query = "SELECT u FROM UsuarioSistema u WHERE u.usuarioSistemaPK.dni = :dni"),
    @NamedQuery(name = "UsuarioSistema.findByUsername", query = "SELECT u FROM UsuarioSistema u WHERE u.usuarioSistemaPK.username = :username"),
    @NamedQuery(name = "UsuarioSistema.findByNombre", query = "SELECT u FROM UsuarioSistema u WHERE u.nombre = :nombre"),
    @NamedQuery(name = "UsuarioSistema.findByApellido", query = "SELECT u FROM UsuarioSistema u WHERE u.apellido = :apellido"),
    @NamedQuery(name = "UsuarioSistema.findByEdad", query = "SELECT u FROM UsuarioSistema u WHERE u.edad = :edad")})
public class UsuarioSistema implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected UsuarioSistemaPK usuarioSistemaPK;
    @Size(max = 255)
    @Column(name = "Nombre")
    private String nombre;
    @Size(max = 255)
    @Column(name = "Apellido")
    private String apellido;
    @Column(name = "Edad")
    private Integer edad;

    public UsuarioSistema() {
    }

    public UsuarioSistema(UsuarioSistemaPK usuarioSistemaPK) {
        this.usuarioSistemaPK = usuarioSistemaPK;
    }

    public UsuarioSistema(String dni, String username) {
        this.usuarioSistemaPK = new UsuarioSistemaPK(dni, username);
    }

    public UsuarioSistemaPK getUsuarioSistemaPK() {
        return usuarioSistemaPK;
    }

    public void setUsuarioSistemaPK(UsuarioSistemaPK usuarioSistemaPK) {
        this.usuarioSistemaPK = usuarioSistemaPK;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (usuarioSistemaPK != null ? usuarioSistemaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UsuarioSistema)) {
            return false;
        }
        UsuarioSistema other = (UsuarioSistema) object;
        if ((this.usuarioSistemaPK == null && other.usuarioSistemaPK != null) || (this.usuarioSistemaPK != null && !this.usuarioSistemaPK.equals(other.usuarioSistemaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.gunshop.bean.UsuarioSistema[ usuarioSistemaPK=" + usuarioSistemaPK + " ]";
    }
    
}
