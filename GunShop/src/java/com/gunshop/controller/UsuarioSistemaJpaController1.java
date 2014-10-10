/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.controller;

import com.gunshop.bean.UsuarioSistema;
import com.gunshop.bean.UsuarioSistemaPK;
import com.gunshop.controller.exceptions.NonexistentEntityException;
import com.gunshop.controller.exceptions.PreexistingEntityException;
import com.gunshop.controller.exceptions.RollbackFailureException;
import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.UserTransaction;

/**
 *
 * @author AyJ
 */
public class UsuarioSistemaJpaController1 implements Serializable {

    public UsuarioSistemaJpaController1(UserTransaction utx, EntityManagerFactory emf) {
        this.utx = utx;
        this.emf = emf;
    }
    private UserTransaction utx = null;
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(UsuarioSistema usuarioSistema) throws PreexistingEntityException, RollbackFailureException, Exception {
        if (usuarioSistema.getUsuarioSistemaPK() == null) {
            usuarioSistema.setUsuarioSistemaPK(new UsuarioSistemaPK());
        }
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            em.persist(usuarioSistema);
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            if (findUsuarioSistema(usuarioSistema.getUsuarioSistemaPK()) != null) {
                throw new PreexistingEntityException("UsuarioSistema " + usuarioSistema + " already exists.", ex);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(UsuarioSistema usuarioSistema) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            usuarioSistema = em.merge(usuarioSistema);
            utx.commit();
        } catch (Exception ex) {
            try {
                utx.rollback();
            } catch (Exception re) {
                throw new RollbackFailureException("An error occurred attempting to roll back the transaction.", re);
            }
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                UsuarioSistemaPK id = usuarioSistema.getUsuarioSistemaPK();
                if (findUsuarioSistema(id) == null) {
                    throw new NonexistentEntityException("The usuarioSistema with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(UsuarioSistemaPK id) throws NonexistentEntityException, RollbackFailureException, Exception {
        EntityManager em = null;
        try {
            utx.begin();
            em = getEntityManager();
            UsuarioSistema usuarioSistema;
            try {
                usuarioSistema = em.getReference(UsuarioSistema.class, id);
                usuarioSistema.getUsuarioSistemaPK();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The usuarioSistema with id " + id + " no longer exists.", enfe);
            }
            em.remove(usuarioSistema);
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

    public List<UsuarioSistema> findUsuarioSistemaEntities() {
        return findUsuarioSistemaEntities(true, -1, -1);
    }

    public List<UsuarioSistema> findUsuarioSistemaEntities(int maxResults, int firstResult) {
        return findUsuarioSistemaEntities(false, maxResults, firstResult);
    }

    private List<UsuarioSistema> findUsuarioSistemaEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(UsuarioSistema.class));
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

    public UsuarioSistema findUsuarioSistema(UsuarioSistemaPK id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(UsuarioSistema.class, id);
        } finally {
            em.close();
        }
    }

    public int getUsuarioSistemaCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<UsuarioSistema> rt = cq.from(UsuarioSistema.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
