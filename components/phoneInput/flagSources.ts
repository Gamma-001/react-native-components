const sources: {[key: string]: number} = {
['flag-AF']: require('./flags/flag-af.jpg'),
['flag-AX']: require('./flags/flag-ax.jpg'),
['flag-AL']: require('./flags/flag-al.jpg'),
['flag-DZ']: require('./flags/flag-dz.jpg'),
['flag-AS']: require('./flags/flag-as.jpg'),
['flag-AD']: require('./flags/flag-ad.jpg'),
['flag-AO']: require('./flags/flag-ao.jpg'),
['flag-AI']: require('./flags/flag-ai.jpg'),
['flag-AQ']: require('./flags/flag-aq.jpg'),
['flag-AG']: require('./flags/flag-ag.jpg'),
['flag-AR']: require('./flags/flag-ar.jpg'),
['flag-AM']: require('./flags/flag-am.jpg'),
['flag-AW']: require('./flags/flag-aw.jpg'),
['flag-AU']: require('./flags/flag-au.jpg'),
['flag-AT']: require('./flags/flag-at.jpg'),
['flag-AZ']: require('./flags/flag-az.jpg'),
['flag-BS']: require('./flags/flag-bs.jpg'),
['flag-BH']: require('./flags/flag-bh.jpg'),
['flag-BD']: require('./flags/flag-bd.jpg'),
['flag-BB']: require('./flags/flag-bb.jpg'),
['flag-BY']: require('./flags/flag-by.jpg'),
['flag-BE']: require('./flags/flag-be.jpg'),
['flag-BZ']: require('./flags/flag-bz.jpg'),
['flag-BJ']: require('./flags/flag-bj.jpg'),
['flag-BM']: require('./flags/flag-bm.jpg'),
['flag-BT']: require('./flags/flag-bt.jpg'),
['flag-BO']: require('./flags/flag-bo.jpg'),
['flag-BA']: require('./flags/flag-ba.jpg'),
['flag-BW']: require('./flags/flag-bw.jpg'),
['flag-BR']: require('./flags/flag-br.jpg'),
['flag-IO']: require('./flags/flag-io.jpg'),
['flag-BN']: require('./flags/flag-bn.jpg'),
['flag-BG']: require('./flags/flag-bg.jpg'),
['flag-BF']: require('./flags/flag-bf.jpg'),
['flag-BI']: require('./flags/flag-bi.jpg'),
['flag-KH']: require('./flags/flag-kh.jpg'),
['flag-CM']: require('./flags/flag-cm.jpg'),
['flag-CA']: require('./flags/flag-ca.jpg'),
['flag-CV']: require('./flags/flag-cv.jpg'),
['flag-KY']: require('./flags/flag-ky.jpg'),
['flag-CF']: require('./flags/flag-cf.jpg'),
['flag-TD']: require('./flags/flag-td.jpg'),
['flag-CL']: require('./flags/flag-cl.jpg'),
['flag-CN']: require('./flags/flag-cn.jpg'),
['flag-CX']: require('./flags/flag-cx.jpg'),
['flag-CC']: require('./flags/flag-cc.jpg'),
['flag-CO']: require('./flags/flag-co.jpg'),
['flag-KM']: require('./flags/flag-km.jpg'),
['flag-CG']: require('./flags/flag-cg.jpg'),
['flag-CD']: require('./flags/flag-cd.jpg'),
['flag-CK']: require('./flags/flag-ck.jpg'),
['flag-CR']: require('./flags/flag-cr.jpg'),
['flag-CI']: require('./flags/flag-ci.jpg'),
['flag-HR']: require('./flags/flag-hr.jpg'),
['flag-CU']: require('./flags/flag-cu.jpg'),
['flag-CY']: require('./flags/flag-cy.jpg'),
['flag-CZ']: require('./flags/flag-cz.jpg'),
['flag-DK']: require('./flags/flag-dk.jpg'),
['flag-DJ']: require('./flags/flag-dj.jpg'),
['flag-DM']: require('./flags/flag-dm.jpg'),
['flag-DO']: require('./flags/flag-do.jpg'),
['flag-EC']: require('./flags/flag-ec.jpg'),
['flag-EG']: require('./flags/flag-eg.jpg'),
['flag-SV']: require('./flags/flag-sv.jpg'),
['flag-GQ']: require('./flags/flag-gq.jpg'),
['flag-ER']: require('./flags/flag-er.jpg'),
['flag-EE']: require('./flags/flag-ee.jpg'),
['flag-ET']: require('./flags/flag-et.jpg'),
['flag-FK']: require('./flags/flag-fk.jpg'),
['flag-FO']: require('./flags/flag-fo.jpg'),
['flag-FJ']: require('./flags/flag-fj.jpg'),
['flag-FI']: require('./flags/flag-fi.jpg'),
['flag-FR']: require('./flags/flag-fr.jpg'),
['flag-GF']: require('./flags/flag-gf.jpg'),
['flag-PF']: require('./flags/flag-pf.jpg'),
['flag-GA']: require('./flags/flag-ga.jpg'),
['flag-GM']: require('./flags/flag-gm.jpg'),
['flag-GE']: require('./flags/flag-ge.jpg'),
['flag-DE']: require('./flags/flag-de.jpg'),
['flag-GH']: require('./flags/flag-gh.jpg'),
['flag-GI']: require('./flags/flag-gi.jpg'),
['flag-GR']: require('./flags/flag-gr.jpg'),
['flag-GL']: require('./flags/flag-gl.jpg'),
['flag-GD']: require('./flags/flag-gd.jpg'),
['flag-GP']: require('./flags/flag-gp.jpg'),
['flag-GU']: require('./flags/flag-gu.jpg'),
['flag-GT']: require('./flags/flag-gt.jpg'),
['flag-GG']: require('./flags/flag-gg.jpg'),
['flag-GN']: require('./flags/flag-gn.jpg'),
['flag-GW']: require('./flags/flag-gw.jpg'),
['flag-GY']: require('./flags/flag-gy.jpg'),
['flag-HT']: require('./flags/flag-ht.jpg'),
['flag-VA']: require('./flags/flag-va.jpg'),
['flag-HN']: require('./flags/flag-hn.jpg'),
['flag-HK']: require('./flags/flag-hk.jpg'),
['flag-HU']: require('./flags/flag-hu.jpg'),
['flag-IS']: require('./flags/flag-is.jpg'),
['flag-IN']: require('./flags/flag-in.jpg'),
['flag-ID']: require('./flags/flag-id.jpg'),
['flag-IR']: require('./flags/flag-ir.jpg'),
['flag-IQ']: require('./flags/flag-iq.jpg'),
['flag-IE']: require('./flags/flag-ie.jpg'),
['flag-IM']: require('./flags/flag-im.jpg'),
['flag-IL']: require('./flags/flag-il.jpg'),
['flag-IT']: require('./flags/flag-it.jpg'),
['flag-JM']: require('./flags/flag-jm.jpg'),
['flag-JP']: require('./flags/flag-jp.jpg'),
['flag-JE']: require('./flags/flag-je.jpg'),
['flag-JO']: require('./flags/flag-jo.jpg'),
['flag-KZ']: require('./flags/flag-kz.jpg'),
['flag-KE']: require('./flags/flag-ke.jpg'),
['flag-KI']: require('./flags/flag-ki.jpg'),
['flag-KP']: require('./flags/flag-kp.jpg'),
['flag-KR']: require('./flags/flag-kr.jpg'),
['flag-KW']: require('./flags/flag-kw.jpg'),
['flag-KG']: require('./flags/flag-kg.jpg'),
['flag-LA']: require('./flags/flag-la.jpg'),
['flag-LV']: require('./flags/flag-lv.jpg'),
['flag-LB']: require('./flags/flag-lb.jpg'),
['flag-LS']: require('./flags/flag-ls.jpg'),
['flag-LR']: require('./flags/flag-lr.jpg'),
['flag-LY']: require('./flags/flag-ly.jpg'),
['flag-LI']: require('./flags/flag-li.jpg'),
['flag-LT']: require('./flags/flag-lt.jpg'),
['flag-LU']: require('./flags/flag-lu.jpg'),
['flag-MO']: require('./flags/flag-mo.jpg'),
['flag-MK']: require('./flags/flag-mk.jpg'),
['flag-MG']: require('./flags/flag-mg.jpg'),
['flag-MW']: require('./flags/flag-mw.jpg'),
['flag-MY']: require('./flags/flag-my.jpg'),
['flag-MV']: require('./flags/flag-mv.jpg'),
['flag-ML']: require('./flags/flag-ml.jpg'),
['flag-MT']: require('./flags/flag-mt.jpg'),
['flag-MH']: require('./flags/flag-mh.jpg'),
['flag-MQ']: require('./flags/flag-mq.jpg'),
['flag-MR']: require('./flags/flag-mr.jpg'),
['flag-MU']: require('./flags/flag-mu.jpg'),
['flag-YT']: require('./flags/flag-yt.jpg'),
['flag-MX']: require('./flags/flag-mx.jpg'),
['flag-FM']: require('./flags/flag-fm.jpg'),
['flag-MD']: require('./flags/flag-md.jpg'),
['flag-MC']: require('./flags/flag-mc.jpg'),
['flag-MN']: require('./flags/flag-mn.jpg'),
['flag-ME']: require('./flags/flag-me.jpg'),
['flag-MS']: require('./flags/flag-ms.jpg'),
['flag-MA']: require('./flags/flag-ma.jpg'),
['flag-MZ']: require('./flags/flag-mz.jpg'),
['flag-MM']: require('./flags/flag-mm.jpg'),
['flag-NA']: require('./flags/flag-na.jpg'),
['flag-NR']: require('./flags/flag-nr.jpg'),
['flag-NP']: require('./flags/flag-np.jpg'),
['flag-NL']: require('./flags/flag-nl.jpg'),
['flag-AN']: require('./flags/flag-an.jpg'),
['flag-NC']: require('./flags/flag-nc.jpg'),
['flag-NZ']: require('./flags/flag-nz.jpg'),
['flag-NI']: require('./flags/flag-ni.jpg'),
['flag-NE']: require('./flags/flag-ne.jpg'),
['flag-NG']: require('./flags/flag-ng.jpg'),
['flag-NU']: require('./flags/flag-nu.jpg'),
['flag-NF']: require('./flags/flag-nf.jpg'),
['flag-MP']: require('./flags/flag-mp.jpg'),
['flag-NO']: require('./flags/flag-no.jpg'),
['flag-OM']: require('./flags/flag-om.jpg'),
['flag-PK']: require('./flags/flag-pk.jpg'),
['flag-PW']: require('./flags/flag-pw.jpg'),
['flag-PS']: require('./flags/flag-ps.jpg'),
['flag-PA']: require('./flags/flag-pa.jpg'),
['flag-PG']: require('./flags/flag-pg.jpg'),
['flag-PY']: require('./flags/flag-py.jpg'),
['flag-PE']: require('./flags/flag-pe.jpg'),
['flag-PH']: require('./flags/flag-ph.jpg'),
['flag-PN']: require('./flags/flag-pn.jpg'),
['flag-PL']: require('./flags/flag-pl.jpg'),
['flag-PT']: require('./flags/flag-pt.jpg'),
['flag-PR']: require('./flags/flag-pr.jpg'),
['flag-QA']: require('./flags/flag-qa.jpg'),
['flag-RO']: require('./flags/flag-ro.jpg'),
['flag-RU']: require('./flags/flag-ru.jpg'),
['flag-RW']: require('./flags/flag-rw.jpg'),
['flag-RE']: require('./flags/flag-re.jpg'),
['flag-BL']: require('./flags/flag-bl.jpg'),
['flag-SH']: require('./flags/flag-sh.jpg'),
['flag-KN']: require('./flags/flag-kn.jpg'),
['flag-LC']: require('./flags/flag-lc.jpg'),
['flag-MF']: require('./flags/flag-mf.jpg'),
['flag-PM']: require('./flags/flag-pm.jpg'),
['flag-VC']: require('./flags/flag-vc.jpg'),
['flag-WS']: require('./flags/flag-ws.jpg'),
['flag-SM']: require('./flags/flag-sm.jpg'),
['flag-ST']: require('./flags/flag-st.jpg'),
['flag-SA']: require('./flags/flag-sa.jpg'),
['flag-SN']: require('./flags/flag-sn.jpg'),
['flag-RS']: require('./flags/flag-rs.jpg'),
['flag-SC']: require('./flags/flag-sc.jpg'),
['flag-SL']: require('./flags/flag-sl.jpg'),
['flag-SG']: require('./flags/flag-sg.jpg'),
['flag-SK']: require('./flags/flag-sk.jpg'),
['flag-SI']: require('./flags/flag-si.jpg'),
['flag-SB']: require('./flags/flag-sb.jpg'),
['flag-SO']: require('./flags/flag-so.jpg'),
['flag-ZA']: require('./flags/flag-za.jpg'),
['flag-SS']: require('./flags/flag-ss.jpg'),
['flag-GS']: require('./flags/flag-gs.jpg'),
['flag-ES']: require('./flags/flag-es.jpg'),
['flag-LK']: require('./flags/flag-lk.jpg'),
['flag-SD']: require('./flags/flag-sd.jpg'),
['flag-SR']: require('./flags/flag-sr.jpg'),
['flag-SJ']: require('./flags/flag-sj.jpg'),
['flag-SZ']: require('./flags/flag-sz.jpg'),
['flag-SE']: require('./flags/flag-se.jpg'),
['flag-CH']: require('./flags/flag-ch.jpg'),
['flag-SY']: require('./flags/flag-sy.jpg'),
['flag-TW']: require('./flags/flag-tw.jpg'),
['flag-TJ']: require('./flags/flag-tj.jpg'),
['flag-TZ']: require('./flags/flag-tz.jpg'),
['flag-TH']: require('./flags/flag-th.jpg'),
['flag-TL']: require('./flags/flag-tl.jpg'),
['flag-TG']: require('./flags/flag-tg.jpg'),
['flag-TK']: require('./flags/flag-tk.jpg'),
['flag-TO']: require('./flags/flag-to.jpg'),
['flag-TT']: require('./flags/flag-tt.jpg'),
['flag-TN']: require('./flags/flag-tn.jpg'),
['flag-TR']: require('./flags/flag-tr.jpg'),
['flag-TM']: require('./flags/flag-tm.jpg'),
['flag-TC']: require('./flags/flag-tc.jpg'),
['flag-TV']: require('./flags/flag-tv.jpg'),
['flag-UG']: require('./flags/flag-ug.jpg'),
['flag-UA']: require('./flags/flag-ua.jpg'),
['flag-AE']: require('./flags/flag-ae.jpg'),
['flag-GB']: require('./flags/flag-gb.jpg'),
['flag-US']: require('./flags/flag-us.jpg'),
['flag-UY']: require('./flags/flag-uy.jpg'),
['flag-UZ']: require('./flags/flag-uz.jpg'),
['flag-VU']: require('./flags/flag-vu.jpg'),
['flag-VE']: require('./flags/flag-ve.jpg'),
['flag-VN']: require('./flags/flag-vn.jpg'),
['flag-VG']: require('./flags/flag-vg.jpg'),
['flag-VI']: require('./flags/flag-vi.jpg'),
['flag-WF']: require('./flags/flag-wf.jpg'),
['flag-YE']: require('./flags/flag-ye.jpg'),
['flag-ZM']: require('./flags/flag-zm.jpg'),
['flag-ZW']: require('./flags/flag-zw.jpg'),
}

export default sources