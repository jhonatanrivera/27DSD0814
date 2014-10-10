/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.controller;

import com.gunshop.bean.Arma;
import java.io.Serializable;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import com.gunshop.bean.Venta;
import com.gunshop.controller.exceptions.NonexistentEntityException;
import com.gunshop.controller.exceptions.PreexistingEntityException;
import com.gunshop.controller.exceptions.RollbackFailureException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.transaction.UserTransaction;

/**
 *
 * @author AyJ
 */
public class ArmaJpaController implements Serializable {

    public ArmaJpaController(UserTransaction utx, EntityManagerFactory emf) {
        this.utx = utx;
        this.emf = emf;
    }
    private UserTransaction utx = null;
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(Arma arma) throws PreexistingEntityException, RollbackFailureException, Exception {
       /* if (arma.getVentaCollection() == null) {
            arma.setVentaCollection(new ArrayList<Venta>());
        }*/
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            em.persist(arma);
            /*Collection<Venta> attachedVentaCollection = new ArrayList<Venta>();
            for (Venta ventaCollectionVentaToAttach : arma.getVentaCollection()) {
                ventaCollectionVentaToAttach = em.getReference(ventaCollectionVentaToAttach.getClass(), ventaCollectionVentaToAttach.getCodRegistro());
                attachedVentaCollection.add(ventaCollectionVentaToAttach);
            }
            arma.setVentaCollection(attachedVentaCollection);
            em.persist(arma);
            for (Venta ventaCollectionVenta : arma.getVentaCollection()) {
                Arma oldSerieArmaOfVentaCollectionVenta = ventaCollectionVenta.getSerieArma();
                ventaCollectionVenta.setSerieArma(arma);
                ventaCollectionVenta = em.merge(ventaCollectionVenta);
                if (oldSerieArmaOfVentaCollectionVenta != null) {
                    oldSerieArmaOfVentaCollectionVenta.getVentaCollection().remove(ventaCollectionVenta);
                    oldSerieArmaOfVentaCollectionVenta = em.merge(oldSerieArmaOfVentaCollectionVenta);
                }
            }*/
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            if (findArma(arma.getSerieArma()) != null) {
                throw new PreexistingEntityException("Arma " + arma + " already exists.", ex);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(Arma arma) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            Arma persistentArma = em.find(Arma.class, arma.getSerieArma());
            /*Collection<Venta> ventaCollectionOld = persistentArma.getVentaCollection();
            Collection<Venta> ventaCollectionNew = arma.getVentaCollection();
            Collection<Venta> attachedVentaCollectionNew = new ArrayList<Venta>();
            for (Venta ventaCollectionNewVentaToAttach : ventaCollectionNew) {
                ventaCollectionNewVentaToAttach = em.getReference(ventaCollectionNewVentaToAttach.getClass(), ventaCollectionNewVentaToAttach.getCodRegistro());
                attachedVentaCollectionNew.add(ventaCollectionNewVentaToAttach);
            }
            ventaCollectionNew = attachedVentaCollectionNew;
            arma.setVentaCollection(ventaCollectionNew);*/
            arma = em.merge(arma);
            /*for (Venta ventaCollectionOldVenta : ventaCollectionOld) {
                if (!ventaCollectionNew.contains(ventaCollectionOldVenta)) {
                    ventaCollectionOldVenta.setSerieArma(null);
                    ventaCollectionOldVenta = em.merge(ventaCollectionOldVenta);
                }
            }
            for (Venta ventaCollectionNewVenta : ventaCollectionNew) {
                if (!ventaCollectionOld.contains(ventaCollectionNewVenta)) {
                    Arma oldSerieArmaOfVentaCollectionNewVenta = ventaCollectionNewVenta.getSerieArma();
                    ventaCollectionNewVenta.setSerieArma(arma);
                    ventaCollectionNewVenta = em.merge(ventaCollectionNewVenta);
                    if (oldSerieArmaOfVentaCollectionNewVenta != null && !oldSerieArmaOfVentaCollectionNewVenta.equals(arma)) {
                        oldSerieArmaOfVentaCollectionNewVenta.getVentaCollection().remove(ventaCollectionNewVenta);
                        oldSerieArmaOfVentaCollectionNewVenta = em.merge(oldSerieArmaOfVentaCollectionNewVenta);
                    }
                }
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
                String id = arma.getSerieArma();
                if (findArma(id) == null) {
                    throw new NonexistentEntityException("The arma with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(String id) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            Arma arma;
            try {
                arma = em.getReference(Arma.class, id);
                arma.getSerieArma();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The arma with id " + id + " no longer exists.", enfe);
            }
            /*Collection<Venta> ventaCollection = arma.getVentaCollection();
            for (Venta ventaCollectionVenta : ventaCollection) {
                ventaCollectionVenta.setSerieArma(null);
                ventaCollectionVenta = em.merge(ventaCollectionVenta);
            }*/
            em.remove(arma);
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

    public List<Arma> findArmaEntities() {
        return findArmaEntities(true, -1, -1);
    }

    public List<Arma> findArmaEntities(int maxResults, int firstResult) {
        return findArmaEntities(false, maxResults, firstResult);
    }

    private List<Arma> findArmaEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(Arma.class));
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

    public Arma findArma(String id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Arma.class, id);
        } finally {
            em.close();
        }
    }

    public int getArmaCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<Arma> rt = cq.from(Arma.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
