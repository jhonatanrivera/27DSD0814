/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.controller;

import java.io.Serializable;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import com.gunshop.bean.Usuario;
import com.gunshop.bean.Arma;
import com.gunshop.bean.Venta;
import com.gunshop.controller.exceptions.NonexistentEntityException;
import com.gunshop.controller.exceptions.PreexistingEntityException;
import com.gunshop.controller.exceptions.RollbackFailureException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.transaction.UserTransaction;

/**
 *
 * @author AyJ
 */
public class VentaJpaController implements Serializable {

    public VentaJpaController(UserTransaction utx, EntityManagerFactory emf) {
        this.utx = utx;
        this.emf = emf;
    }
    private UserTransaction utx = null;
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(Venta venta) throws PreexistingEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            /*Usuario codUsuario = venta.getCodUsuario();
            if (codUsuario != null) {
                codUsuario = em.getReference(codUsuario.getClass(), codUsuario.getCodUsuario());
                venta.setCodUsuario(codUsuario);
            }
            Arma serieArma = venta.getSerieArma();
            if (serieArma != null) {
                serieArma = em.getReference(serieArma.getClass(), serieArma.getSerieArma());
                venta.setSerieArma(serieArma);
            }*/
            em.persist(venta);
            /*if (codUsuario != null) {
                codUsuario.getVentaCollection().add(venta);
                codUsuario = em.merge(codUsuario);
            }
            if (serieArma != null) {
                serieArma.getVentaCollection().add(venta);
                serieArma = em.merge(serieArma);
            }*/
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            if (findVenta(venta.getCodRegistro()) != null) {
                throw new PreexistingEntityException("Venta " + venta + " already exists.", ex);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(Venta venta) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            Venta persistentVenta = em.find(Venta.class, venta.getCodRegistro());
            /*Usuario codUsuarioOld = persistentVenta.getCodUsuario();
            Usuario codUsuarioNew = venta.getCodUsuario();
            Arma serieArmaOld = persistentVenta.getSerieArma();
            Arma serieArmaNew = venta.getSerieArma();
            if (codUsuarioNew != null) {
                codUsuarioNew = em.getReference(codUsuarioNew.getClass(), codUsuarioNew.getCodUsuario());
                venta.setCodUsuario(codUsuarioNew);
            }
            if (serieArmaNew != null) {
                serieArmaNew = em.getReference(serieArmaNew.getClass(), serieArmaNew.getSerieArma());
                venta.setSerieArma(serieArmaNew);
            }*/
            venta = em.merge(venta);
            /*if (codUsuarioOld != null && !codUsuarioOld.equals(codUsuarioNew)) {
                codUsuarioOld.getVentaCollection().remove(venta);
                codUsuarioOld = em.merge(codUsuarioOld);
            }
            if (codUsuarioNew != null && !codUsuarioNew.equals(codUsuarioOld)) {
                codUsuarioNew.getVentaCollection().add(venta);
                codUsuarioNew = em.merge(codUsuarioNew);
            }
            if (serieArmaOld != null && !serieArmaOld.equals(serieArmaNew)) {
                serieArmaOld.getVentaCollection().remove(venta);
                serieArmaOld = em.merge(serieArmaOld);
            }
            if (serieArmaNew != null && !serieArmaNew.equals(serieArmaOld)) {
                serieArmaNew.getVentaCollection().add(venta);
                serieArmaNew = em.merge(serieArmaNew);
            }*/
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                Integer id = venta.getCodRegistro();
                if (findVenta(id) == null) {
                    throw new NonexistentEntityException("The venta with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(Integer id) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            Venta venta;
            try {
                venta = em.getReference(Venta.class, id);
                venta.getCodRegistro();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The venta with id " + id + " no longer exists.", enfe);
            }
            /*Usuario codUsuario = venta.getCodUsuario();
            if (codUsuario != null) {
                codUsuario.getVentaCollection().remove(venta);
                codUsuario = em.merge(codUsuario);
            }
            Arma serieArma = venta.getSerieArma();
            if (serieArma != null) {
                serieArma.getVentaCollection().remove(venta);
                serieArma = em.merge(serieArma);
            }*/
            em.remove(venta);
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public List<Venta> findVentaEntities() {
        return findVentaEntities(true, -1, -1);
    }

    public List<Venta> findVentaEntities(int maxResults, int firstResult) {
        return findVentaEntities(false, maxResults, firstResult);
    }

    private List<Venta> findVentaEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(Venta.class));
            Query q = em.createQuery(cq);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    public Venta findVenta(Integer id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Venta.class, id);
        } finally {
            em.close();
        }
    }

    public int getVentaCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<Venta> rt = cq.from(Venta.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
