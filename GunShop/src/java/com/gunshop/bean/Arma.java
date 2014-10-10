/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.bean;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author AyJ
 */
@Entity
@Table(name = "ARMA")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Arma.findAll", query = "SELECT a FROM Arma a"),
    @NamedQuery(name = "Arma.findBySerieArma", query = "SELECT a FROM Arma a WHERE a.serieArma = :serieArma"),
    @NamedQuery(name = "Arma.findByDescripcion", query = "SELECT a FROM Arma a WHERE a.descripcion = :descripcion"),
    @NamedQuery(name = "Arma.findByCaracteristicas", query = "SELECT a FROM Arma a WHERE a.caracteristicas = :caracteristicas"),
    @NamedQuery(name = "Arma.findByMarca", query = "SELECT a FROM Arma a WHERE a.marca = :marca"),
    @NamedQuery(name = "Arma.findByPrecio", query = "SELECT a FROM Arma a WHERE a.precio = :precio"),
    @NamedQuery(name = "Arma.findByCategoria", query = "SELECT a FROM Arma a WHERE a.categoria = :categoria"),
    @NamedQuery(name = "Arma.findByAutorizacion", query = "SELECT a FROM Arma a WHERE a.autorizacion = :autorizacion"),
    @NamedQuery(name = "Arma.findByUrlImagen", query = "SELECT a FROM Arma a WHERE a.urlImagen = :urlImagen"),
    @NamedQuery(name = "Arma.findByFeIngreso", query = "SELECT a FROM Arma a WHERE a.feIngreso = :feIngreso")})
public class Arma implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 12)
    @Column(name = "SERIE_ARMA")
    private String serieArma;
    @Size(max = 60)
    @Column(name = "DESCRIPCION")
    private String descripcion;
    @Size(max = 200)
    @Column(name = "CARACTERISTICAS")
    private String caracteristicas;
    @Size(max = 60)
    @Column(name = "MARCA")
    private String marca;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "PRECIO")
    private BigDecimal precio;
    @Column(name = "CATEGORIA")
    private Integer categoria;
    @Column(name = "AUTORIZACION")
    private Integer autorizacion;
    @Size(max = 200)
    @Column(name = "URL_IMAGEN")
    private String urlImagen;
    @Column(name = "FE_INGRESO")
    @Temporal(TemporalType.TIMESTAMP)
    private Date feIngreso;
    //@OneToMany(mappedBy = "serieArma")
    //private Collection<Venta> ventaCollection;

    public Arma() {
    }

    public Arma(String serieArma) {
        this.serieArma = serieArma;
    }

    public String getSerieArma() {
        return serieArma;
    }

    public void setSerieArma(String serieArma) {
        this.serieArma = serieArma;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Integer getCategoria() {
        return categoria;
    }

    public void setCategoria(Integer categoria) {
        this.categoria = categoria;
    }

    public Integer getAutorizacion() {
        return autorizacion;
    }

    public void setAutorizacion(Integer autorizacion) {
        this.autorizacion = autorizacion;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public Date getFeIngreso() {
        return feIngreso;
    }

    public void setFeIngreso(Date feIngreso) {
        this.feIngreso = feIngreso;
    }

    /*
    @XmlTransient
    public Collection<Venta> getVentaCollection() {
        return ventaCollection;
    }

    public void setVentaCollection(Collection<Venta> ventaCollection) {
        this.ventaCollection = ventaCollection;
    }*/

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (serieArma != null ? serieArma.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Arma)) {
            return false;
        }
        Arma other = (Arma) object;
        if ((this.serieArma == null && other.serieArma != null) || (this.serieArma != null && !this.serieArma.equals(other.serieArma))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.gunshop.bean.Arma[ serieArma=" + serieArma + " ]";
    }
    
}
