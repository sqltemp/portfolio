<!--
README.md – Portfolio cybersécurité (style visuel à la Malachi Gamblin)
Mode d’emploi :
1) Copiez tout ce fichier dans votre README.md de repo GitHub.
2) Remplacez les zones [ENTRE CROCHETS] par vos infos.
3) Placez vos images dans /assets/ (profilepic.jpg, project*.png, logos…).
4) Si certains styles HTML sont trop “stricts” pour GitHub Mobile, utilisez la SECTION DE SECOURS (pur Markdown) plus bas.
-->

<!-- ===== HERO / BANNIÈRE ===== -->
<div align="center" style="background:#1f1f1f; padding:56px 20px; color:#fff; border-radius:14px;">
  <img src="assets/profilepic.jpg" alt="Photo de [VOTRE NOM]" width="150" style="border-radius:50%; border:4px solid #3fb950;">
  <h1 style="margin:18px 0 6px;">Thierry Matrat</h1>
  <p style="margin:0; font-size:18px; opacity:.9;">Analyste en cybersécurité • Blue/Red Team • Support techique et formation</p>
  <p style="margin:8px 0 0; font-size:14px; opacity:.85;">Mes projets, articles et ressources pour votre cybersécurité.</p>
  
  <!-- mini navigation -->
  <p style="margin-top:22px;">
    <a href="#a-propos" style="color:#3fb950; text-decoration:none; margin:0 10px;">À propos</a> ·
    <a href="#projets" style="color:#3fb950; text-decoration:none; margin:0 10px;">Projets</a> ·
    <a href="#competences" style="color:#3fb950; text-decoration:none; margin:0 10px;">Compétences</a> ·
    <a href="#certifications" style="color:#3fb950; text-decoration:none; margin:0 10px;">Certifications</a> ·
    <a href="#contact" style="color:#3fb950; text-decoration:none; margin:0 10px;">Contact</a>
  </p>
</div>

---

<!-- ===== À PROPOS ===== -->
<h2 id="a-propos">👋 À propos</h2>

Je suis [votre rôle : ex. analyste SOC / consultant sécurité], spécialisé·e en [domaines clés].  
J’aime **opérationnaliser** la sécurité : triage d’alertes, chasse aux menaces, détection, automatisation et amélioration continue.

- 🔭 Actuellement : [projets en cours]  
- 💡 Intérêts : Blue/Red Team, DFIR, SIEM, EDR, Cloud Security, cartographie de menaces  
- 🧪 Méthodo : hypothèses → preuves (captures, POC, scripts) → résultats (tableaux, graphes)  
- 🗂️ Ce repo sert de **hub** : chaque projet a son dossier, sa doc et ses artefacts (captures, exports, scripts)

> **Objectif du portfolio :** démontrer la **pratique** (données, captures, scripts) et la **pédagogie** (readme clairs, pas-à-pas, risques & limites).

---

<!-- ===== PROJETS (cartes) ===== -->
<h2 id="projets">🧩 Projets phares</h2>

<div style="display:flex; flex-wrap:wrap; gap:18px;">
  
  <!-- CARTE 1 -->
  <div style="flex:1 1 300px; min-width:280px; max-width:360px; background:#fff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06);">
    <img src="assets/project1.png" alt="Audit réseau" style="width:100%; display:block;">
    <div style="padding:14px 16px 18px;">
      <h3 style="margin:4px 0 8px;">Audit réseau & vulnérabilités</h3>
      <p style="margin:0 0 10px; line-height:1.55;">Cartographie, scans (Nmap/Nessus), priorisation CVSS, remédiations et rapport.</p>
      <p style="margin:0 0 12px; font-size:14px; opacity:.85;">Stack : Nmap · Nessus · Python · Markdown</p>
      <a href="projects/projet-audit-reseau/README.md" style="display:inline-block; padding:8px 12px; background:#3fb950; color:#fff; border-radius:6px; text-decoration:none;">Voir le projet →</a>
    </div>
  </div>

  <!-- CARTE 2 -->
  <div style="flex:1 1 300px; min-width:280px; max-width:360px; background:#fff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06);">
    <img src="assets/project2.png" alt="Détection d’intrusion" style="width:100%; display:block;">
    <div style="padding:14px 16px 18px;">
      <h3 style="margin:4px 0 8px;">Détection d’intrusion & SIEM</h3>
      <p style="margin:0 0 10px; line-height:1.55;">Pipeline de logs, règles de détection, hunting et tableaux de bord.</p>
      <p style="margin:0 0 12px; font-size:14px; opacity:.85;">Stack : Suricata · Elastic/Splunk · Sysmon · Sigma</p>
      <a href="projects/projet-detection-intrusion/README.md" style="display:inline-block; padding:8px 12px; background:#3fb950; color:#fff; border-radius:6px; text-decoration:none;">Voir le projet →</a>
    </div>
  </div>

  <!-- CARTE 3 -->
  <div style="flex:1 1 300px; min-width:280px; max-width:360px; background:#fff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06);">
    <img src="assets/project3.png" alt="Automatisation sécurité" style="width:100%; display:block;">
    <div style="padding:14px 16px 18px;">
      <h3 style="margin:4px 0 8px;">Automatisation & réponse</h3>
      <p style="margin:0 0 10px; line-height:1.55;">Scripts d’enrichissement IOC/API, playbooks, export rapports.</p>
      <p style="margin:0 0 12px; font-size:14px; opacity:.85;">Stack : Python · Bash · REST API · JQ</p>
      <a href="projects/projet-automation/README.md" style="display:inline-block; padding:8px 12px; background:#3fb950; color:#fff; border-radius:6px; text-decoration:none;">Voir le projet →</a>
    </div>
  </div>

</div>

<details>
<summary>➕ Voir d’autres projets (write-ups CTF, cloud, IAM, forensic…)</summary>

- [Write-ups CTF – réseau & web](projects/ctf-writeups/README.md)
- [Durcissement Windows/Linux](projects/hardening/README.md)
- [Sécurité Cloud (IAM/Policies)](projects/cloud-security/README.md)
- [Forensic & DFIR notes](projects/dfir/README.md)

</details>

---

<!-- ===== COMPÉTENCES ===== -->
<h2 id="competences">🛠️ Compétences</h2>

**Défense / Blue Team** : SIEM & IPS (Splunk, MS Sentinel, Wazuh, Snort), EDR (Bit Defender Gravity Zone, MS Defender for Endpoints)
**Offensif / Red Team** : Reconnaissance, Penetration & Scanners vulnerabilites (Nmap, BurpSuite, Metasploit, mimikatz, Nessus)
**Langages & Scripting** : C#, C++, Python, Bash, PowerShell, JavaScript
**Systèmes & Réseau** : Linux, Windows, MacOS, iOS, Android, TCP/IP, DNS, Wireshark  
**Normes et Standards** : NIST CSF2.0, OSSTMM, ISO27001, IEC62443

---

<!-- ===== CERTIFICATIONS ===== -->
<h2 id="certifications">🎓 Certifications & formations</h2>

- [Professionnal Certificate in Cybersecurity] – [Massachussets Institute of Technology], [2022] – [MIT](https://certificates.emeritus.org/551ef89b-003f-456c-b6ae-f3fac29734db#acc.oCvBfZWQ) 
- [Security+] – [CompTIA], [2025] -  [Security+](https://www.credly.com/badges/64372dff-c123-469f-8ef0-38c62923a272) 
- Formations notables : TryHackMe (Certificats [Blue Team](https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZVVQEKCLAQ.pdf), [Redteaming](https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KGKMGGWDIB.pdf) , [Jr Penetration Tester](https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CVEG9XZNC6.pdf))

---

<div style="background:#f6f8fa; padding:18px 16px; border:1px solid #e5e7eb; border-radius:12px;">
  <strong>📐 Méthodologie de projet</strong>
  <ol>
    <li>Contexte & objectifs (risques, portée, hypothèses)</li>
    <li>Collecte de données (outils, logs, preuves)</li>
    <li>Analyse & détection (règles, corrélations, hunting)</li>
    <li>Résultats (captures, métriques, tableaux)</li>
    <li>Recommandations & limites (ce qui reste à faire)</li>
  </ol>
</div>

---

<h2 id="contact">📫 Contact</h2>

- **Email** : contact@sqltemp.com  
- **LinkedIn** : [https://www.linkedin.com](https://www.linkedin.com/in/thierrymatrat/)
- **GitHub** : [https://github.com/votreprofil](https://github.com/votreprofil)  
- **CV** : [CV Thierry Matrat](assets/CV_ThierryMatrat.pdf)

---

