/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.bean;

import java.io.Serializable;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author AyJ
 */
@Entity
@Table(name = "VENTA")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Venta.findAll", query = "SELECT v FROM Venta v"),
    @NamedQuery(name = "Venta.findByCodRegistro", query = "SELECT v FROM Venta v WHERE v.codRegistro = :codRegistro"),
    @NamedQuery(name = "Venta.findByTipoPago", query = "SELECT v FROM Venta v WHERE v.tipoPago = :tipoPago"),
    @NamedQuery(name = "Venta.findByFeRegistro", query = "SELECT v FROM Venta v WHERE v.feRegistro = :feRegistro"),
    @NamedQuery(name = "Venta.findByEstado", query = "SELECT v FROM Venta v WHERE v.estado = :estado"),
    @NamedQuery(name = "Venta.findByFeRespuesta", query = "SELECT v FROM Venta v WHERE v.feRespuesta = :feRespuesta"),
    @NamedQuery(name = "Venta.findByCodSucamec", query = "SELECT v FROM Venta v WHERE v.codSucamec = :codSucamec"),
    @NamedQuery(name = "Venta.findByNroLicencia", query = "SELECT v FROM Venta v WHERE v.nroLicencia = :nroLicencia"),
    @NamedQuery(name = "Venta.findByFeEntrega", query = "SELECT v FROM Venta v WHERE v.feEntrega = :feEntrega")})
public class Venta implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "COD_REGISTRO")
    private Integer codRegistro;
    @Column(name = "TIPO_PAGO")
    private Integer tipoPago;
    @Column(name = "FE_REGISTRO")
    @Temporal(TemporalType.TIMESTAMP)
    private Date feRegistro;
    @Column(name = "ESTADO")
    private Integer estado;
    @Column(name = "FE_RESPUESTA")
    @Temporal(TemporalType.TIMESTAMP)
    private Date feRespuesta;
    @Column(name = "COD_SUCAMEC")
    private Integer codSucamec;
    @Size(max = 8)
    @Column(name = "NRO_LICENCIA")
    private String nroLicencia;
    @Column(name = "FE_ENTREGA")
    @Temporal(TemporalType.TIMESTAMP)
    private Date feEntrega;
    @Column(name = "COD_USUARIO")
    private Integer codUsuario;
    @Column(name = "SERIE_ARMA")
    private String serieArma;
    /*@JoinColumn(name = "COD_USUARIO", referencedColumnName = "COD_USUARIO")
    @ManyToOne
    private Usuario codUsuario;
    @JoinColumn(name = "SERIE_ARMA", referencedColumnName = "SERIE_ARMA")
    @ManyToOne
    private Arma serieArma;*/

    public Venta() {
    }

    public Venta(Integer codRegistro) {
        this.codRegistro = codRegistro;
    }

    public Integer getCodRegistro() {
        return codRegistro;
    }

    public void setCodRegistro(Integer codRegistro) {
        this.codRegistro = codRegistro;
    }

    public Integer getTipoPago() {
        return tipoPago;
    }

    public void setTipoPago(Integer tipoPago) {
        this.tipoPago = tipoPago;
    }

    public Date getFeRegistro() {
        return feRegistro;
    }

    public void setFeRegistro(Date feRegistro) {
        this.feRegistro = feRegistro;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public Date getFeRespuesta() {
        return feRespuesta;
    }

    public void setFeRespuesta(Date feRespuesta) {
        this.feRespuesta = feRespuesta;
    }

    public Integer getCodSucamec() {
        return codSucamec;
    }

    public void setCodSucamec(Integer codSucamec) {
        this.codSucamec = codSucamec;
    }

    public String getNroLicencia() {
        return nroLicencia;
    }

    public void setNroLicencia(String nroLicencia) {
        this.nroLicencia = nroLicencia;
    }

    public Date getFeEntrega() {
        return feEntrega;
    }

    public void setFeEntrega(Date feEntrega) {
        this.feEntrega = feEntrega;
    }

    public Integer getCodUsuario() {
        return codUsuario;
    }

    public void setCodUsuario(Integer codUsuario) {
        this.codUsuario = codUsuario;
    }

    public String getSerieArma() {
        return serieArma;
    }

    public void setSerieArma(String serieArma) {
        this.serieArma = serieArma;
    }

    
    /*
    public Usuario getCodUsuario() {
        return codUsuario;
    }

    public void setCodUsuario(Usuario codUsuario) {
        this.codUsuario = codUsuario;
    }

    public Arma getSerieArma() {
        return serieArma;
    }

    public void setSerieArma(Arma serieArma) {
        this.serieArma = serieArma;
    }*/

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codRegistro != null ? codRegistro.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Venta)) {
            return false;
        }
        Venta other = (Venta) object;
        if ((this.codRegistro == null && other.codRegistro != null) || (this.codRegistro != null && !this.codRegistro.equals(other.codRegistro))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.gunshop.bean.Venta[ codRegistro=" + codRegistro + " ]";
    }
    
}
