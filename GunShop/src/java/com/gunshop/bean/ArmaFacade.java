/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gunshop.bean;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author AyJ
 */
@Stateless
public class ArmaFacade extends AbstractFacade<Arma> {
    @PersistenceContext(unitName = "GunShopPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ArmaFacade() {
        super(Arma.class);
    }
    
}
