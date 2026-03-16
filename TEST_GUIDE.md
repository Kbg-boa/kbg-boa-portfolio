# 🧪 GUIDE DE TEST - Portfolio KBG BOA

## 📋 TESTS À EFFECTUER AVANT LANCEMENT

**Important:** Effectuer ces tests après déploiement sur Vercel

---

## 1️⃣ TESTS SÉCURITÉ CONTENU

### Test A: Protection Clic Droit ✅

**Instructions:**
1. Ouvre ton site
2. Fais clic droit n'importe où
3. **Résultat attendu:** Menu ne s'affiche PAS ❌

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test B: Protection Clavier ✅

**Instructions:**
1. Sur le site, appuie sur `F12`
2. **Résultat attendu:** DevTools ne s'ouvrent PAS ❌

3. Appuie sur `Ctrl+U` (ou `Cmd+U` sur Mac)
4. **Résultat attendu:** Code source ne s'affiche PAS ❌

5. Appuie sur `Ctrl+Shift+I`
6. **Résultat attendu:** Inspecteur ne s'ouvre PAS ❌

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test C: Protection Sélection Texte ✅

**Instructions:**
1. Essaie de sélectionner du texte avec la souris
2. **Résultat attendu:** Texte ne peut PAS être sélectionné ❌

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test D: Protection Images ✅

**Instructions:**
1. Essaie de glisser-déposer une image
2. **Résultat attendu:** Image ne se déplace PAS ❌

3. Survole une image
4. **Résultat attendu:** Watermark "© KBG BOA" apparaît légèrement ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 2️⃣ TESTS FORMULAIRE DE CONTACT

### Test E: Turnstile CAPTCHA ✅

**Instructions:**
1. Scroll vers section Contact
2. Remplis le formulaire (nom, email, message)
3. **Résultat attendu:** Turnstile CAPTCHA s'affiche ✅

4. Essaie de soumettre SANS cocher Turnstile
5. **Résultat attendu:** Message "Please complete security verification" ❌

6. Coche le Turnstile
7. **Résultat attendu:** Checkmark verte apparaît ✅

8. Soumets le formulaire
9. **Résultat attendu:** Client email s'ouvre avec les infos pré-remplies ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test F: Validation Formulaire ✅

**Instructions:**
1. Essaie de soumettre formulaire vide
2. **Résultat attendu:** Erreurs de validation ❌

3. Entre un email invalide (ex: "test")
4. **Résultat attendu:** Erreur "email invalide" ❌

5. Entre un nom trop court (1 lettre)
6. **Résultat attendu:** Erreur validation ❌

7. Entre un message trop court (<10 chars)
8. **Résultat attendu:** Erreur validation ❌

**Status:** ⬜ PASS / ⬜ FAIL

---

## 3️⃣ TESTS EMAIL PROTECTION

### Test G: Email Obfusqué ✅

**Instructions:**
1. Va sur ton site
2. Trouve la section email
3. **Résultat attendu:** Affiche "Click to Email Me" au lieu de l'email ✅

4. Fais clic droit → "Afficher le code source"
5. Cherche "gmail" ou "kbgmathieu" dans le code
6. **Résultat attendu:** Email PAS visible dans le code HTML ❌

7. Clique sur le bouton "Click to Email Me"
8. **Résultat attendu:** Client email s'ouvre avec `kbgmathieu@gmail.com` ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 4️⃣ TESTS WHATSAPP

### Test H: WhatsApp Dubai ✅

**Instructions:**
1. Clique sur le bouton WhatsApp Dubai
2. **Résultat attendu:** WhatsApp s'ouvre avec +971 52 371 1530 ✅
3. **Résultat attendu:** Message pré-rempli apparaît ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test I: WhatsApp RDC ✅

**Instructions:**
1. Clique sur le bouton WhatsApp RDC
2. **Résultat attendu:** WhatsApp s'ouvre avec +243 81 211 9488 ✅
3. **Résultat attendu:** Message pré-rempli apparaît ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test J: Floating WhatsApp Button ✅

**Instructions:**
1. Scroll la page
2. **Résultat attendu:** Bouton WhatsApp flottant visible en bas à droite ✅
3. Clique dessus
4. **Résultat attendu:** WhatsApp s'ouvre ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 5️⃣ TESTS NAVIGATION

### Test K: Navigation Menu ✅

**Instructions:**
1. Clique sur chaque lien du menu
2. **Résultat attendu:** Scroll fluide vers la section ✅

Test chaque lien:
- ⬜ Home
- ⬜ About
- ⬜ Services
- ⬜ Portfolio
- ⬜ Contact

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test L: Mobile Menu ✅

**Instructions:**
1. Ouvre site sur mobile OU réduis fenêtre navigateur
2. **Résultat attendu:** Menu hamburger apparaît ✅
3. Clique sur hamburger
4. **Résultat attendu:** Menu mobile s'ouvre ✅
5. Clique sur un lien
6. **Résultat attendu:** Menu se ferme et scroll vers section ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 6️⃣ TESTS RÉSEAUX SOCIAUX

### Test M: Liens Réseaux Sociaux ✅

**Instructions:**
Test chaque lien (s'ouvre dans nouvel onglet):
1. ⬜ Instagram → https://www.instagram.com/kbg_boa
2. ⬜ TikTok → https://www.tiktok.com/@mathieukbg1
3. ⬜ Facebook → Lien Facebook correct
4. ⬜ Snapchat → Snapchat correct

**Status:** ⬜ PASS / ⬜ FAIL

---

## 7️⃣ TESTS RESPONSIVE MOBILE

### Test N: Mobile iPhone ✅

**Instructions:**
1. Ouvre site sur iPhone (ou simule dans DevTools)
2. Vérifie chaque section:
   - ⬜ Hero section lisible
   - ⬜ About section bien formatée
   - ⬜ Services cartes empilées verticalement
   - ⬜ Portfolio grid responsive
   - ⬜ Formulaire contact utilisable
   - ⬜ Footer lisible
3. **Résultat attendu:** Tout est lisible et utilisable ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test O: Mobile Android ✅

**Instructions:**
1. Ouvre site sur Android
2. Teste les mêmes éléments que Test N
3. **Résultat attendu:** Tout fonctionne ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test P: Tablet ✅

**Instructions:**
1. Ouvre site sur tablette (ou simule)
2. **Résultat attendu:** Layout s'adapte bien ✅
3. **Résultat attendu:** Toutes les fonctionnalités marchent ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 8️⃣ TESTS SEO

### Test Q: Sitemap Accessible ✅

**Instructions:**
1. Visite: `https://[TON-URL]/sitemap.xml`
2. **Résultat attendu:** XML s'affiche avec liste des URLs ✅
3. Vérifie que les URLs sont correctes (pas `your-site.vercel.app`)

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test R: Robots.txt Accessible ✅

**Instructions:**
1. Visite: `https://[TON-URL]/robots.txt`
2. **Résultat attendu:** Fichier texte s'affiche ✅
3. Vérifie que l'URL du sitemap est correcte

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test S: Meta Tags (Facebook Preview) ✅

**Instructions:**
1. Va sur: https://developers.facebook.com/tools/debug/
2. Entre ton URL
3. Clique "Debug"
4. **Résultat attendu:** 
   - Titre correct affiché ✅
   - Description correcte ✅
   - Image preview s'affiche ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test T: Meta Tags (Twitter Preview) ✅

**Instructions:**
1. Va sur: https://cards-dev.twitter.com/validator
2. Entre ton URL
3. **Résultat attendu:** Twitter card preview s'affiche ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 9️⃣ TESTS PERFORMANCE

### Test U: Vitesse de Chargement ✅

**Instructions:**
1. Va sur: https://pagespeed.web.dev/
2. Entre ton URL
3. Clique "Analyze"
4. **Résultat attendu:** 
   - Mobile: >70 ✅
   - Desktop: >80 ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

### Test V: GTmetrix ✅

**Instructions:**
1. Va sur: https://gtmetrix.com/
2. Entre ton URL
3. **Résultat attendu:** Grade B ou mieux ✅

**Status:** ⬜ PASS / ⬜ FAIL

---

## 🔟 TESTS SECURITY HEADERS

### Test W: Security Headers Check ✅

**Instructions:**
1. Va sur: https://securityheaders.com/
2. Entre ton URL
3. **Résultat attendu:** Grade A ou B ✅

Vérifie que ces headers sont présents:
- ⬜ Content-Security-Policy
- ⬜ X-Frame-Options
- ⬜ X-Content-Type-Options
- ⬜ Strict-Transport-Security
- ⬜ Referrer-Policy

**Status:** ⬜ PASS / ⬜ FAIL

---

## ✅ RÉSULTAT FINAL

**Total de tests:** 23

**Tests passés:** __ / 23

**Taux de réussite:** __ %

---

## 🎯 CRITÈRES DE LANCEMENT

**MINIMUM requis pour lancer:**
- ✅ Tous les tests sécurité (A-D) PASS
- ✅ Formulaire fonctionne (E-F) PASS
- ✅ WhatsApp fonctionne (H-J) PASS
- ✅ Mobile responsive (N) PASS
- ✅ Sitemap/Robots (Q-R) PASS

**Taux minimum:** 18/23 (78%)

---

## 🔴 SI UN TEST ÉCHOUE

### Problème: Turnstile ne s'affiche pas

**Solution:**
1. Vérifie que tu as remplacé la clé de test
2. Vérifie que le domaine est correct dans Cloudflare
3. Vérifie console navigateur pour erreurs

### Problème: Clic droit pas bloqué

**Solution:**
1. Vérifie que ContentProtection est importé dans App.tsx
2. Vérifie console pour erreurs JavaScript
3. Rafraîchis le cache navigateur (Ctrl+Shift+R)

### Problème: Email visible dans code source

**Solution:**
1. Vérifie que tu utilises le composant Contact.tsx mis à jour
2. Vérifie fonction getEmailAddress()
3. Rafraîchis le cache

### Problème: Sitemap 404

**Solution:**
1. Vérifie que sitemap.xml est dans /public/
2. Redéploie sur Vercel
3. Attends 2-3 minutes pour propagation

### Problème: WhatsApp ne s'ouvre pas

**Solution:**
1. Vérifie les numéros de téléphone
2. Vérifie format URL WhatsApp
3. Teste sur mobile ET desktop

---

## 📞 APRÈS TOUS LES TESTS

**Si tous les tests passent (ou 18+/23):**
1. ✅ Note la date et heure
2. ✅ Prends des screenshots
3. ✅ Sauvegarde l'URL Vercel
4. 🚀 **LANCE LE SITE OFFICIELLEMENT !**

**Si des tests échouent:**
1. ⚠️ Note quels tests échouent
2. ⚠️ Utilise les solutions ci-dessus
3. ⚠️ Corrige et redéploie
4. ⚠️ Re-teste
5. ⚠️ Répète jusqu'à ce que tout passe

---

**BON COURAGE POUR LES TESTS ! 🧪✅**

**Ton site va être PARFAIT ! 💎**

---

**Guide créé le:** 15 Mars 2026  
**Pour:** Kabangu Mathieu - KBG BOA  
**Tests à effectuer:** Avant lancement officiel
