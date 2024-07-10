var blocked_domains = [
    "*://*.2no.co/*",
    "*://*.artbbs.to/*",
    "*://*.fap.al/*",
    "*://*.githb.co/*",
    "*://*.glthub.co/*",
    "*://*.hrtya.com/*",
    "*://*.invoke.ml/*",
    "*://*.jbcam.cz/*",
    "*://*.mywot.com/*",
    "*://*.mywot.net/*",
    "*://*.oawyr.com/*",
    "*://*.qpfhd.com/*",
    "*://*.robux.dev/*",
    "*://*.wzrkt.com/*",
    "*://*.yip.su/*",
    "*://*.nrots.net/*",
    "*://*.is.sh/*",
    "*://*.init.sh/*",
    "*://*.s.sh/*",
    "*://*.orzk.net/*",
    "*://*.rsa.pub/*",
    "*://*.knalc.com/*",
    "*://*.rs.sh/*",
    "*://*.updata.sh/*",
    "*://*.init.ps/*",
    "*://*.ap-ms.net/*",
    "*://*.newbot.ug/*",
    "*://*.botnew.ug/*",
    "*://*.dswsrv.co/*",
    "*://*.ncjfjr.in/*",
    "*://*.srvnrj.us/*",
    "*://*.nrjyhd.in/*",
    "*://*.yhdpbn.fr/*",
    "*://*.kcnikj.in/*",
    "*://*.dswfjr.tk/*",
    "*://*.srvyhd.tk/*",
    "*://*.yhdikj.in/*",
    "*://*.dswdsw.ru/*",
    "*://*.ncjsrv.ro/*",
    "*://*.pbnpbn.us/*",
    "*://*.yhdncj.ch/*",
    "*://*.kcnikj.ca/*",
    "*://*.dswyhd.nl/*",
    "*://*.ncjpbn.in/*",
    "*://*.fjrikj.nl/*",
    "*://*.nrjkcn.in/*",
    "*://*.yhdjfn.ru/*",
    "*://*.jfndsw.fr/*",
    "*://*.jfnnrj.nl/*",
    "*://*.dswdsw.co/*",
    "*://*.ikjsrv.nl/*",
    "*://*.fjrikj.in/*",
    "*://*.kcnnrj.us/*",
    "*://*.nrjnrj.fr/*",
    "*://*.yhdfjr.tk/*",
    "*://*.jfnkcn.nl/*",
    "*://*.ncjdsw.in/*",
    "*://*.nrjfjr.nl/*",
    "*://*.kcnnrj.cn/*",
    "*://*.ncjkcn.nl/*",
    "*://*.kcnikj.fr/*",
    "*://*.kcnpbn.co/*",
    "*://*.jfnjfn.ro/*",
    "*://*.ikjfjr.ch/*",
    "*://*.ikjikj.fr/*",
    "*://*.ncjncj.nl/*",
    "*://*.jfnfjr.ca/*",
    "*://*.dswncj.in/*",
    "*://*.srvncj.co/*",
    "*://*.kcnjfn.nl/*",
    "*://*.ikjncj.fr/*",
    "*://*.ikjikj.in/*",
    "*://*.kcnncj.nl/*",
    "*://*.dswfjr.nl/*",
    "*://*.kcndf.ml/*",
    "*://*.yhddsw.ro/*",
    "*://*.fjrpbn.in/*",
    "*://*.fjrncj.nl/*",
    "*://*.kcnyhd.ro/*",
    "*://*.fjryhd.tk/*",
    "*://*.yhdyhd.ro/*",
    "*://*.maindf.ml/*",
    "*://*.dswdsw.ro/*",
    "*://*.pogunt.tk/*",
    "*://*.gbgbr.cn/*",
    "*://*.govaj.com/*",
    "*://*.labbe.biz/*",
    "*://*.dobell.su/*",
    "*://*.3lift.org/*",
    "*://*.parks.su/*",
    "*://*.zoplm.com/*",
    "*://*.nsdns.xyz/*",
    "*://*.aiisa.am/*",
    "*://*.au-ul.com/*",
    "*://*.au-xm.com/*",
    "*://*.tdreg.icu/*",
    "*://*.tdreg.top/*",
    "*://*.1mp.mobi/*",
    "*://*.3gl.net/*",
    "*://*.4dle.info/*",
    "*://*.4mads.com/*",
    "*://*.8live.com/*",
    "*://*.a2dfp.net/*",
    "*://*.a2pub.com/*",
    "*://*.a8.net/*",
    "*://*.a9.com/*",
    "*://*.aarki.com/*",
    "*://*.abnad.net/*",
    "*://*.ackak.com/*",
    "*://*.ad1.ru/*",
    "*://*.adbn.ru/*",
    "*://*.adbomb.ru/*",
    "*://*.adbro.me/*",
    "*://*.adcamp.ru/*",
    "*://*.adcast.ru/*",
    "*://*.adcome.cn/*",
    "*://*.adcv.jp/*",
    "*://*.addash.co/*",
    "*://*.adflow.ru/*",
    "*://*.adfog.ru/*",
    "*://*.adfox.ru/*",
    "*://*.adfox.vn/*",
    "*://*.adgrx.com/*",
    "*://*.adhub.ru/*",
    "*://*.adimg.net/*",
    "*://*.adingo.jp/*",
    "*://*.adinte.jp/*",
    "*://*.adizer.ru/*",
    "*://*.adj.st/*",
    "*://*.adjust.io/*",
    "*://*.admob.biz/*",
    "*://*.admob.de/*",
    "*://*.admob.dk/*",
    "*://*.admob.es/*",
    "*://*.admob.fi/*",
    "*://*.admob.fr/*",
    "*://*.admob.gr/*",
    "*://*.admob.it/*",
    "*://*.admob.jp/*",
    "*://*.admob.kr/*",
    "*://*.admob.net/*",
    "*://*.admob.no/*",
    "*://*.admob.pt/*",
    "*://*.admob.ru/*",
    "*://*.admob.sg/*",
    "*://*.admob.tk/*",
    "*://*.admob.tw/*",
    "*://*.admobi.ru/*",
    "*://*.adname.ru/*",
    "*://*.adpdx.com/*",
    "*://*.adpxl.co/*",
    "*://*.adrock.ru/*",
    "*://*.adrock.ua/*",
    "*://*.adrta.com/*",
    "*://*.adru.net/*",
    "*://*.adsage.cn/*",
    "*://*.adsdk.com/*",
    "*://*.adsee.jp/*",
    "*://*.adsmo.ru/*",
    "*://*.adtima.vn/*",
    "*://*.adtime.ru/*",
    "*://*.adtng.com/*",
    "*://*.adups.com/*",
    "*://*.aduu.cn/*",
    "*://*.adview.pl/*",
    "*://*.advmob.cn/*",
    "*://*.adwad.ru/*",
    "*://*.adwo.com/*",
    "*://*.adxmi.com/*",
    "*://*.adz.mobi/*",
    "*://*.affiz.net/*",
    "*://*.amoad.com/*",
    "*://*.amobi.vn/*",
    "*://*.amung.us/*",
    "*://*.app-c.net/*",
    "*://*.app.link/*",
    "*://*.appia.com/*",
    "*://*.ato.mx/*",
    "*://*.atti.com/*",
    "*://*.augur.io/*",
    "*://*.b2c.com/*",
    "*://*.bango.net/*",
    "*://*.bnmla.com/*",
    "*://*.boom.ro/*",
    "*://*.branch.io/*",
    "*://*.btrll.com/*",
    "*://*.bttn.io/*",
    "*://*.buzzad.io/*",
    "*://*.bypass.jp/*",
    "*://*.cben1.net/*",
    "*://*.cbx.net/*",
    "*://*.cint.com/*",
    "*://*.clix.vn/*",
    "*://*.cnt.my/*",
    "*://*.count.ly/*",
    "*://*.cpx.to/*",
    "*://*.cszz.ru/*",
    "*://*.dable.io/*",
    "*://*.djax.com/*",
    "*://*.domob.cn/*",
    "*://*.domob.org/*",
    "*://*.eacdn.com/*",
    "*://*.ebz.io/*",
    "*://*.epom.com/*",
    "*://*.exe.bid/*",
    "*://*.fabric.io/*",
    "*://*.fiksu.com/*",
    "*://*.fimc.net/*",
    "*://*.fluct.jp/*",
    "*://*.fmpub.net/*",
    "*://*.fout.jp/*",
    "*://*.fptad.com/*",
    "*://*.fwmrm.net/*",
    "*://*.gemius.pl/*",
    "*://*.gop1.co/*",
    "*://*.gtop.ro/*",
    "*://*.guile.jp/*",
    "*://*.gynax.com/*",
    "*://*.hghit.com/*",
    "*://*.hsych.com/*",
    "*://*.i2ad.jp/*",
    "*://*.i2i.jp/*",
    "*://*.id1.cn/*",
    "*://*.ident.me/*",
    "*://*.idot.cz/*",
    "*://*.immob.cn/*",
    "*://*.imwx.com/*",
    "*://*.inclk.com/*",
    "*://*.inmobi.cn/*",
    "*://*.intely.cn/*",
    "*://*.inuvi.com/*",
    "*://*.iocnt.com/*",
    "*://*.irr.ru/*",
    "*://*.itim.vn/*",
    "*://*.jampp.com/*",
    "*://*.jatxt.com/*",
    "*://*.jmp9.com/*",
    "*://*.kadam.net/*",
    "*://*.kejet.net/*",
    "*://*.kiip.com/*",
    "*://*.kiip.me/*",
    "*://*.kimia.com/*",
    "*://*.kimia.es/*",
    "*://*.kixer.com/*",
    "*://*.klick.vn/*",
    "*://*.kma.biz/*",
    "*://*.krxd.net/*",
    "*://*.lcads.ru/*",
    "*://*.leads.su/*",
    "*://*.lean.com/*",
    "*://*.lgse.com/*",
    "*://*.loopme.me/*",
    "*://*.lp4.io/*",
    "*://*.m-shes.ru/*",
    "*://*.m2pub.com/*",
    "*://*.madnet.ru/*",
    "*://*.mads.bz/*",
    "*://*.mads.com/*",
    "*://*.maist.jp/*",
    "*://*.mbn.su/*",
    "*://*.mdotm.com/*",
    "*://*.mebof.com/*",
    "*://*.medio.com/*",
    "*://*.mgage.com/*",
    "*://*.miva.com/*",
    "*://*.moat.com/*",
    "*://*.moba8.net/*",
    "*://*.mobon.com/*",
    "*://*.mobsrv.in/*",
    "*://*.mobyt.com/*",
    "*://*.mofox.com/*",
    "*://*.morgdm.ru/*",
    "*://*.movad.de/*",
    "*://*.mpire.com/*",
    "*://*.mpnrs.com/*",
    "*://*.msads.net/*",
    "*://*.mucu.jp/*",
    "*://*.mxpnl.com/*",
    "*://*.mxtsr.com/*",
    "*://*.nclick.ru/*",
    "*://*.nend.net/*",
    "*://*.neoban.su/*",
    "*://*.nex8.net/*",
    "*://*.nexac.com/*",
    "*://*.nmcdn.us/*",
    "*://*.ogury.com/*",
    "*://*.onthe.io/*",
    "*://*.openx.net/*",
    "*://*.openx.org/*",
    "*://*.opt8.co/*",
    "*://*.owap.su/*",
    "*://*.piano.io/*",
    "*://*.pop.bid/*",
    "*://*.poptm.com/*",
    "*://*.pr-ten.de/*",
    "*://*.privy.com/*",
    "*://*.prre.ru/*",
    "*://*.psstt.com/*",
    "*://*.pub1.co/*",
    "*://*.qgss8.com/*",
    "*://*.quigo.com/*",
    "*://*.rbnt.org/*",
    "*://*.rek.mobi/*",
    "*://*.relap.io/*",
    "*://*.remox.com/*",
    "*://*.rlcdn.com/*",
    "*://*.rnmd.net/*",
    "*://*.sam4m.com/*",
    "*://*.seed.by/*",
    "*://*.serv0.com/*",
    "*://*.sinoa.com/*",
    "*://*.socdm.com/*",
    "*://*.stat.su/*",
    "*://*.swrve.com/*",
    "*://*.tanx.com/*",
    "*://*.tapas.net/*",
    "*://*.tapit.com/*",
    "*://*.tapone.jp/*",
    "*://*.tappx.com/*",
    "*://*.tdxio.com/*",
    "*://*.tend.io/*",
    "*://*.thrnt.com/*",
    "*://*.token.ad/*",
    "*://*.tpbid.com/*",
    "*://*.u-ad.info/*",
    "*://*.umbel.com/*",
    "*://*.umeng.co/*",
    "*://*.uniad.vn/*",
    "*://*.vads.vn/*",
    "*://*.vcdn.biz/*",
    "*://*.vclick.vn/*",
    "*://*.velti.com/*",
    "*://*.vmweb.net/*",
    "*://*.vnet.cn/*",
    "*://*.vntsm.com/*",
    "*://*.w3i.com/*",
    "*://*.waps.cn/*",
    "*://*.warp.ly/*",
    "*://*.waust.at/*",
    "*://*.wbn.su/*",
    "*://*.wda.com/*",
    "*://*.wiyun.com/*",
    "*://*.wmip.ru/*",
    "*://*.wmirk.ru/*",
    "*://*.wsod.com/*",
    "*://*.xad.com/*",
    "*://*.xdrig.com/*",
    "*://*.ximad.com/*",
    "*://*.xiti.com/*",
    "*://*.xius.com/*",
    "*://*.xq1.net/*",
    "*://*.yicha.jp/*",
    "*://*.yluvo.com/*",
    "*://*.youmi.net/*",
    "*://*.yume.com/*",
    "*://*.zcoup.com/*",
    "*://*.zucks.net/*",
    "*://*.zwaar.org/*",
    "*://*.adcell.de/*",
    "*://*.adlock.in/*",
    "*://*.aimes.com/*",
    "*://*.andr.net/*",
    "*://*.ant.com/*",
    "*://*.avis.cm/*",
    "*://*.bde3d.com/*",
    "*://*.brans.pl/*",
    "*://*.catz4.com/*",
    "*://*.cle.kr/*",
    "*://*.cliop.com/*",
    "*://*.cnn.cm/*",
    "*://*.comfz.com/*",
    "*://*.conds.ru/*",
    "*://*.ctrck.com/*",
    "*://*.divx.it/*",
    "*://*.djsrp.com/*",
    "*://*.dzxcq.com/*",
    "*://*.ebdr3.com/*",
    "*://*.eftps.com/*",
    "*://*.ertya.com/*",
    "*://*.eyes.by/*",
    "*://*.fqtag.com/*",
    "*://*.frtya.com/*",
    "*://*.frtyb.com/*",
    "*://*.fyxm.net/*",
    "*://*.goggl.com/*",
    "*://*.gvc.vn/*",
    "*://*.hgtzz.com/*",
    "*://*.hopto.org/*",
    "*://*.infra.by/*",
    "*://*.inndl.com/*",
    "*://*.isuzi.com/*",
    "*://*.jque.net/*",
    "*://*.jsing.net/*",
    "*://*.kazaa.com/*",
    "*://*.kjbbc.net/*",
    "*://*.k-lite.tk/*",
    "*://*.lefos.net/*",
    "*://*.lo2.me/*",
    "*://*.lzjl.com/*",
    "*://*.malkm.com/*",
    "*://*.mgjmp.com/*",
    "*://*.neki.org/*",
    "*://*.nryb.com/*",
    "*://*.obyz.de/*",
    "*://*.oneund.ru/*",
    "*://*.onwey.com/*",
    "*://*.oofun.com/*",
    "*://*.paime.com/*",
    "*://*.payn.me/*",
    "*://*.penix.nl/*",
    "*://*.poker.cm/*",
    "*://*.port.bg/*",
    "*://*.rubiks.ca/*",
    "*://*.sijmp.com/*",
    "*://*.taffr.com/*",
    "*://*.target.cm/*",
    "*://*.theads.me/*",
    "*://*.thetop.be/*",
    "*://*.torgi.kz/*",
    "*://*.tossm.com/*",
    "*://*.trk4.com/*",
    "*://*.twttr.com/*",
    "*://*.tzw.com/*",
    "*://*.updo.nl/*",
    "*://*.vdhu.com/*",
    "*://*.vk2ca.com/*",
    "*://*.vmay.com/*",
    "*://*.warco.pl/*",
    "*://*.wmmax.com/*",
    "*://*.wpxn.com/*",
    "*://*.wwaol.com/*",
    "*://*.wwwal.com/*",
    "*://*.xed.pl/*",
    "*://*.xvika.net/*",
    "*://*.xvika.org/*",
    "*://*.yatrk.xyz/*",
    "*://*.ymxpb.com/*",
    "*://*.yrals.com/*",
    "*://*.zapto.org/*",
    "*://*.zbest.in/*",
    "*://*.0dax.com/*",
    "*://*.0pros.com/*",
    "*://*.1bet.com/*",
    "*://*.1hwy.com/*",
    "*://*.1pamm.ru/*",
    "*://*.1re.info/*",
    "*://*.1stat.ru/*",
    "*://*.1wish.net/*",
    "*://*.2anal.net/*",
    "*://*.2cam.eu/*",
    "*://*.2cam.nl/*",
    "*://*.2gay.net/*",
    "*://*.2kata.ru/*",
    "*://*.2mj.pl/*",
    "*://*.2sexy.ro/*",
    "*://*.3am.info/*",
    "*://*.3date.de/*",
    "*://*.3gplay.pl/*",
    "*://*.3lm.info/*",
    "*://*.3vig.com/*",
    "*://*.3xit.net/*",
    "*://*.4bqs.com/*",
    "*://*.4cock.com/*",
    "*://*.4ever.cc/*",
    "*://*.4inn.pl/*",
    "*://*.4meme.com/*",
    "*://*.4ur.click/*",
    "*://*.4wheel.de/*",
    "*://*.5forex.ru/*",
    "*://*.5u.com/*",
    "*://*.5udt.com/*",
    "*://*.6ox.de/*",
    "*://*.7fb.ru/*",
    "*://*.7gfs.com/*",
    "*://*.7wind.ru/*",
    "*://*.8gold.com/*",
    "*://*.8rf.com/*",
    "*://*.8si.ru/*",
    "*://*.9ics.cn/*",
    "*://*.9med.net/*",
    "*://*.a2sex.com/*",
    "*://*.aapz.com/*",
    "*://*.abcsex.dk/*",
    "*://*.above.com/*",
    "*://*.acads.net/*",
    "*://*.acimo.com/*",
    "*://*.acrh.be/*",
    "*://*.ahasex.de/*",
    "*://*.airpb.com/*",
    "*://*.akama.com/*",
    "*://*.akita.kz/*",
    "*://*.aksao.com/*",
    "*://*.akuhni.by/*",
    "*://*.aldik.com/*",
    "*://*.alfa9.com/*",
    "*://*.alini.de/*",
    "*://*.amt-k.ru/*",
    "*://*.anal.cx/*",
    "*://*.anews.cc/*",
    "*://*.aviodg.eu/*",
    "*://*.back.dog/*",
    "*://*.cienum.fr/*",
    "*://*.cif.su/*",
    "*://*.cigar.pt/*",
    "*://*.cs1g.com/*",
    "*://*.cs6hm.com/*",
    "*://*.cs-gra.pl/*",
    "*://*.csk.ru/*",
    "*://*.euuaa.com/*",
    "*://*.evkc.com/*",
    "*://*.famir.com/*",
    "*://*.fnmsk.ru/*",
    "*://*.go.biz/*",
    "*://*.grafit.pl/*",
    "*://*.hukbo.com/*",
    "*://*.hut1.ru/*",
    "*://*.hybrid.ru/*",
    "*://*.hygar.com/*",
    "*://*.ico.re/*",
    "*://*.idkom.com/*",
    "*://*.ido3.com/*",
    "*://*.idrct.com/*",
    "*://*.nomuos.it/*",
    "*://*.eclick.vn/*",
    "*://*.novaon.vn/*",
    "*://*.ants.vn/*",
    "*://*.vietad.vn/*",
    "*://*.adpia.vn/*",
    "*://*.mediaz.vn/*",
    "*://*.sharks.vn/*",
    "*://*.yoads.net/*",
    "*://*.amcdn.vn/*",
    "*://*.adfly.vn/*",
    "*://*.adflex.vn/*",
    "*://*.pushdy.vn/*",
    "*://*.nanda.vn/*",
    "*://*.adsweb.vn/*",
    "*://*.alivar.vn/*",
    "*://*.bgadx.com/*",
    "*://*.ghimc.vn/*",
    "*://*.myad.vn/*",
    "*://*.cnnd.vn/*",
    "*://*.deqik.com/*",
    "*://*.1slo.pl/*",
    "*://*.2easy.pl/*",
    "*://*.4life.com/*",
    "*://*.4shoes.pl/*",
    "*://*.4skype.pl/*",
    "*://*.7tools.eu/*",
    "*://*.9print.pl/*",
    "*://*.a1a.pl/*",
    "*://*.adakom.pl/*",
    "*://*.adarts.pl/*",
    "*://*.addays.pl/*",
    "*://*.adsivo.pl/*",
    "*://*.airit.pl/*",
    "*://*.akri.pl/*",
    "*://*.alise.pl/*",
    "*://*.alxmar.pl/*",
    "*://*.amway.com/*",
    "*://*.amway.pl/*",
    "*://*.ariix.com/*",
    "*://*.artgt.pl/*",
    "*://*.assat.pl/*",
    "*://*.audmax.pl/*",
    "*://*.avema.pl/*",
    "*://*.awin.com/*",
    "*://*.ayael.pl/*",
    "*://*.blipo.pl/*",
    "*://*.blubox.pl/*",
    "*://*.bmfoto.pl/*",
    "*://*.bmgrp.tk/*",
    "*://*.boobi.biz/*",
    "*://*.brevio.pl/*",
    "*://*.brns.pl/*",
    "*://*.bykaja.pl/*",
    "*://*.caal.pl/*",
    "*://*.cbldc.io/*",
    "*://*.cdp.pl/*",
    "*://*.cedino.pl/*",
    "*://*.chukka.pl/*",
    "*://*.clansf.pl/*",
    "*://*.cnto.pl/*",
    "*://*.cpbld.co/*",
    "*://*.crca.pl/*",
    "*://*.credy.pl/*",
    "*://*.cs-fpg.pl/*",
    "*://*.ctbike.pl/*",
    "*://*.cwork.pl/*",
    "*://*.cyric.pl/*",
    "*://*.davor.io/*",
    "*://*.dbo2.pl/*",
    "*://*.dkgraf.pl/*",
    "*://*.doslav.pl/*",
    "*://*.duramo.pl/*",
    "*://*.dwnlad.ws/*",
    "*://*.eccopl.pl/*",
    "*://*.elcap.pl/*",
    "*://*.elled.pl/*",
    "*://*.enormo.pl/*",
    "*://*.entotc.pl/*",
    "*://*.ermail.pl/*",
    "*://*.esedra.pl/*",
    "*://*.eskk.pl/*",
    "*://*.e-cda.pl/*",
    "*://*.f4u.pl/*",
    "*://*.faldo.pl/*",
    "*://*.filapl.pl/*",
    "*://*.finezo.pl/*",
    "*://*.foruj.pl/*",
    "*://*.fxgm.com/*",
    "*://*.f-ads.pl/*",
    "*://*.gethc.pl/*",
    "*://*.gh-cup.pl/*",
    "*://*.gikon.pl/*",
    "*://*.gim9sc.pl/*",
    "*://*.gllik.pl/*",
    "*://*.gopost.pl/*",
    "*://*.gozoku.pl/*",
    "*://*.grarpg.pl/*",
    "*://*.greenr.pl/*",
    "*://*.hikon.pl/*",
    "*://*.hitlog.tk/*",
    "*://*.hksfa.org/*",
    "*://*.homgar.pl/*",
    "*://*.http4u.pl/*",
    "*://*.ikaart.pl/*",
    "*://*.ipzd.pl/*",
    "*://*.itcity.pl/*",
    "*://*.itvwro.pl/*",
    "*://*.i-cda.pl/*",
    "*://*.i-mobi.pl/*",
    "*://*.jacar.pl/*",
    "*://*.janod.pl/*",
    "*://*.jaster.pl/*",
    "*://*.jatop.pl/*",
    "*://*.jont.pl/*",
    "*://*.jsauto.pl/*",
    "*://*.ju-ma.pl/*",
    "*://*.k4home.pl/*",
    "*://*.kaie.pl/*",
    "*://*.kanze.pl/*",
    "*://*.kddz.pl/*",
    "*://*.kidobi.pl/*",
    "*://*.kloikg.pl/*",
    "*://*.kofiup.pl/*",
    "*://*.kpzkaj.pl/*",
    "*://*.krdn.pl/*",
    "*://*.krukus.pl/*",
    "*://*.ktrak.pl/*",
    "*://*.lahony.pl/*",
    "*://*.lamri.pl/*",
    "*://*.las-rp.pl/*",
    "*://*.lavka.pl/*",
    "*://*.ldrcp.pl/*",
    "*://*.leadn.pl/*",
    "*://*.leyda.pl/*",
    "*://*.limeta.pl/*",
    "*://*.linkz.it/*",
    "*://*.lnaff.pl/*",
    "*://*.lnpush.pl/*",
    "*://*.lommi.pl/*",
    "*://*.longup.co/*",
    "*://*.lopon.pl/*",
    "*://*.lorete.pl/*",
    "*://*.lp-wip.pl/*",
    "*://*.ludpol.pl/*",
    "*://*.lululo.pl/*",
    "*://*.lunzo.pl/*",
    "*://*.lutra.pl/*",
    "*://*.mabbud.pl/*",
    "*://*.maendo.tv/*",
    "*://*.mas1o.pl/*",
    "*://*.masere.pl/*",
    "*://*.matfi.pl/*",
    "*://*.matlag.pl/*",
    "*://*.merlin.pl/*",
    "*://*.mestro.pl/*",
    "*://*.mgid.com/*",
    "*://*.mobila.pl/*",
    "*://*.mohacz.pl/*",
    "*://*.mopik.pl/*",
    "*://*.mstk.pl/*",
    "*://*.mtpn.pl/*",
    "*://*.musika.pl/*",
    "*://*.myway.com/*",
    "*://*.nashop.pl/*",
    "*://*.nassy.pl/*",
    "*://*.nbbuty.pl/*",
    "*://*.nclick.pl/*",
    "*://*.neocam.pl/*",
    "*://*.nilco.pl/*",
    "*://*.nnkml.com/*",
    "*://*.norton.pl/*",
    "*://*.odevo.pl/*",
    "*://*.oftmos.pl/*",
    "*://*.ohkrab.pl/*",
    "*://*.olbart.pl/*",
    "*://*.olubin.pl/*",
    "*://*.owio.pl/*",
    "*://*.ozebox.pl/*",
    "*://*.papla.pl/*",
    "*://*.pato.pl/*",
    "*://*.pcib.pl/*",
    "*://*.pcsp.pl/*",
    "*://*.pdinet.pl/*",
    "*://*.pdmrc.pl/*",
    "*://*.perch.pl/*",
    "*://*.piestv.pl/*",
    "*://*.pjszop.pl/*",
    "*://*.pkaudi.pl/*",
    "*://*.pl1nk.pl/*",
    "*://*.plwash.pl/*",
    "*://*.pmpj.pl/*",
    "*://*.pojzn.pl/*",
    "*://*.polluk.pl/*",
    "*://*.ppswb.pl/*",
    "*://*.pumapl.pl/*",
    "*://*.puna.pl/*",
    "*://*.pynio.pl/*",
    "*://*.qbrak.pl/*",
    "*://*.qsteam.pl/*",
    "*://*.quadre.pl/*",
    "*://*.rbaan.net/*",
    "*://*.rbffn.net/*",
    "*://*.rbfrh.com/*",
    "*://*.rbkkg.net/*",
    "*://*.rbknt.com/*",
    "*://*.rikoo.pl/*",
    "*://*.rtvmax.pl/*",
    "*://*.r-dach.pl/*",
    "*://*.salake.pl/*",
    "*://*.scagel.pl/*",
    "*://*.sekut.pl/*",
    "*://*.seobar.pl/*",
    "*://*.sewama.pl/*",
    "*://*.sgipn.pl/*",
    "*://*.silcan.pl/*",
    "*://*.sipp.pl/*",
    "*://*.skbm.pl/*",
    "*://*.slowl.pl/*",
    "*://*.sp2mzc.pl/*",
    "*://*.spokeo.pl/*",
    "*://*.srkgs.pl/*",
    "*://*.ssman.pl/*",
    "*://*.starc.se/*",
    "*://*.stkk.pl/*",
    "*://*.stotom.pl/*",
    "*://*.sukces.pl/*",
    "*://*.swce.pl/*",
    "*://*.szuc.pl/*",
    "*://*.s-foto.pl/*",
    "*://*.terrex.pl/*",
    "*://*.tfaz.pl/*",
    "*://*.tocho.pl/*",
    "*://*.tootu.pl/*",
    "*://*.tpnk.pl/*",
    "*://*.trionz.pl/*",
    "*://*.tyqu.pl/*",
    "*://*.uabuty.pl/*",
    "*://*.uggpl.pl/*",
    "*://*.unnmd.pl/*",
    "*://*.vansj.com/*",
    "*://*.vanspl.pl/*",
    "*://*.vcascc.eu/*",
    "*://*.vibbo.pl/*",
    "*://*.vidaxl.pl/*",
    "*://*.visvet.pl/*",
    "*://*.vsee.tk/*",
    "*://*.wabs.pl/*",
    "*://*.wandys.pl/*",
    "*://*.wardon.pl/*",
    "*://*.wczaso.pl/*",
    "*://*.wernet.pl/*",
    "*://*.wlewki.pl/*",
    "*://*.wraplo.pl/*",
    "*://*.wrig.pl/*",
    "*://*.wzwb.pl/*",
    "*://*.zamedi.pl/*",
    "*://*.zgol.pl/*",
    "*://*.zmall.pl/*",
    "*://*.zxflux.pl/*",
    "*://*.0n.click/*",
    "*://*.cld4r.com/*",
    "*://*.d8x.pl/*",
    "*://*.ditds.xyz/*",
    "*://*.eeu.pl/*",
    "*://*.liin.ml/*",
    "*://*.myaff.pl/*",
    "*://*.nbryb.com/*",
    "*://*.nu7.pl/*",
    "*://*.pliki.pw/*",
    "*://*.qwer3.pl/*",
    "*://*.rfv.pl/*",
    "*://*.sm4ll.in/*",
    "*://*.t1ny.in/*",
    "*://*.uio7.pl/*",
    "*://*.uvy3.pl/*",
    "*://*.vcxz.pl/*",
    "*://*.y7e.us/*",
    "*://*.yyn.us/*",
    "*://*.ab4hr.com/*",
    "*://*.asdfz.pro/*",
    "*://*.iotiot.cf/*",
    "*://*.lnktk.com/*",
    "*://*.onef.cf/*",
    "*://*.0ff.page/*",
    "*://*.0pen.page/*",
    "*://*.0xi.eu/*",
    "*://*.0xi.pl/*",
    "*://*.6m.pl/*",
    "*://*.7dot.cn/*",
    "*://*.akazoo.pl/*",
    "*://*.aktpl.com/*",
    "*://*.alldc.pw/*",
    "*://*.append.pl/*",
    "*://*.badyna.pl/*",
    "*://*.beka.pl/*",
    "*://*.cdsp.pl/*",
    "*://*.cisie.pl/*",
    "*://*.debie.pl/*",
    "*://*.dont.pl/*",
    "*://*.doski.by/*",
    "*://*.drunt.at/*",
    "*://*.dtmx.pl/*",
    "*://*.dulawa.pl/*",
    "*://*.eforsa.pl/*",
    "*://*.egda.pl/*",
    "*://*.ek0.pl/*",
    "*://*.ekipl.eu/*",
    "*://*.ekofil.pl/*",
    "*://*.elvox.pl/*",
    "*://*.exeos.ws/*",
    "*://*.eyupp.com/*",
    "*://*.filmu.pl/*",
    "*://*.filser.co/*",
    "*://*.gagrat.co/*",
    "*://*.gayza.net/*",
    "*://*.gigup.net/*",
    "*://*.gnreg.com/*",
    "*://*.h0me.eu/*",
    "*://*.higo.net/*",
    "*://*.hothub.pl/*",
    "*://*.i8i.eu/*",
    "*://*.iluzja.pl/*",
    "*://*.infx.eu/*",
    "*://*.innsat.pl/*",
    "*://*.inteza.pl/*",
    "*://*.iq1.eu/*",
    "*://*.irbf.com/*",
    "*://*.jamba.pl/*",
    "*://*.jmbase.my/*",
    "*://*.juran.pl/*",
    "*://*.jutup.pl/*",
    "*://*.kaldar.pl/*",
    "*://*.kanapa.tv/*",
    "*://*.lander.pl/*",
    "*://*.luczko.pl/*",
    "*://*.mzgov.net/*",
    "*://*.nekkel.pl/*",
    "*://*.nfbio.com/*",
    "*://*.nsfund.mn/*",
    "*://*.nvod.pl/*",
    "*://*.paifi.net/*",
    "*://*.pay2me.pl/*",
    "*://*.paywu.net/*",
    "*://*.pko-bp.pl/*",
    "*://*.pl.team/*",
    "*://*.pliks.pl/*",
    "*://*.reg-me.pl/*",
    "*://*.rogene.tk/*",
    "*://*.s1te.eu/*",
    "*://*.s1te.pl/*",
    "*://*.sdx.pl/*",
    "*://*.shael.org/*",
    "*://*.sigma1.eu/*",
    "*://*.smsiak.pl/*",
    "*://*.soo.sg/*",
    "*://*.szoten.pl/*",
    "*://*.tpc.hu/*",
    "*://*.tpskp.com/*",
    "*://*.vidnet.pl/*",
    "*://*.vkino.pl/*",
    "*://*.waly.pl/*",
    "*://*.welte.pl/*",
    "*://*.wimaj.pl/*",
    "*://*.wmcs.pl/*",
    "*://*.www-pb.pl/*",
    "*://*.zajonc.de/*",
    "*://*.bde.be/*",
    "*://*.cacl.fr/*",
    "*://*.cope.it/*",
    "*://*.cracks.vg/*",
    "*://*.decota.es/*",
    "*://*.e1r.net/*",
    "*://*.eeps.me/*",
    "*://*.fbku.com/*",
    "*://*.ipl.hk/*",
    "*://*.mmile.com/*",
    "*://*.nutnet.ir/*",
    "*://*.pwvita.pl/*",
    "*://*.roks.ua/*",
    "*://*.teprom.it/*",
    "*://*.trahic.ru/*",
    "*://*.vroll.net/*",
    "*://*.vvps.ws/*",
    "*://*.wp9.ru/*",
    "*://*.zkic.com/*",
    "*://*.adcore.ru/*",
    "*://*.adexc.net/*",
    "*://*.adsfac.eu/*",
    "*://*.adtdp.com/*",
    "*://*.adve.net/*",
    "*://*.advizi.ru/*",
    "*://*.byet.org/*",
    "*://*.entk.net/*",
    "*://*.gmads.net/*",
    "*://*.link.ru/*",
    "*://*.luxup.ru/*",
    "*://*.m2k.ru/*",
    "*://*.ngacm.com/*",
    "*://*.ntweb.org/*",
    "*://*.nxtck.com/*",
    "*://*.one.ru/*",
    "*://*.pgssl.com/*",
    "*://*.ro2.biz/*",
    "*://*.rutrk.org/*",
    "*://*.s4le.net/*",
    "*://*.tx2.ru/*",
    "*://*.ybex.com/*",
    "*://*.yllix.com/*",
    "*://*.1bg.net/*",
    "*://*.mtree.com/*",
    "*://*.videe.tv/*",
    "*://*.com.com/*",
    "*://*.zdbb.net/*",
    "*://*.htl.bid/*",
    "*://*.uadx.com/*",
    "*://*.adtech.de/*",
    "*://*.k1s.nl/*",
    "*://*.c4dl.com/*",
    "*://*.count.im/*",
    "*://*.adfoc.us/*",
    "*://*.xpop.co/*",
    "*://*.adfun.ru/*",
    "*://*.hitpro.us/*",
    "*://*.ad4mat.de/*",
    "*://*.o-oe.com/*",
    "*://*.ebdr2.com/*",
    "*://*.t2lgo.com/*",
    "*://*.pr-cy.ru/*",
    "*://*.xxx-r.com/*",
    "*://*.adsfac.us/*",
    "*://*.list.ru/*",
    "*://*.mytraf.ru/*",
    "*://*.spylog.ru/*",
    "*://*.ekmas.com/*",
    "*://*.estat.com/*",
    "*://*.ocxxx.com/*",
    "*://*.vmn.net/*",
    "*://*.adedy.com/*",
    "*://*.cetrk.com/*",
    "*://*.kvors.com/*",
    "*://*.nbjmp.com/*",
    "*://*.admez.com/*",
    "*://*.oxybe.com/*",
    "*://*.stabx.net/*",
    "*://*.piwik.org/*",
    "*://*.appie.com/*",
    "*://*.bdgadv.ru/*",
    "*://*.cnomy.com/*",
    "*://*.ads.cc/*",
    "*://*.roia.biz/*",
    "*://*.rhtag.com/*",
    "*://*.arank.com/*",
    "*://*.b3d.com/*",
    "*://*.obeus.com/*",
    "*://*.search.in/*",
    "*://*.boloz.com/*",
    "*://*.zr0.net/*",
    "*://*.qksrv.com/*",
    "*://*.rmbn.net/*",
    "*://*.fttcj.com/*",
    "*://*.zedo.com/*",
    "*://*.goatse.cx/*",
    "*://*.oralse.cx/*",
    "*://*.goatse.ca/*",
    "*://*.oralse.ca/*",
    "*://*.goat.cx/*",
    "*://*.goatse.bz/*",
    "*://*.goatse.ru/*",
    "*://*.hai2u.com/*",
    "*://*.nimp.org/*",
    "*://*.7zip.fr/*",
    "*://*.bkrtx.com/*",
    "*://*.cjt1.net/*",
    "*://*.cw.nu/*",
    "*://*.fdbdo.com/*",
    "*://*.gator.com/*",
    "*://*.iccee.com/*",
    "*://*.istat.biz/*",
    "*://*.izarc.fr/*",
    "*://*.msn1.com/*",
    "*://*.msnm.com/*",
    "*://*.sclk.org/*",
    "*://*.sekel.ch/*",
    "*://*.stats1.in/*",
    "*://*.trcko.com/*",
    "*://*.tynt.com/*",
    "*://*.xcnn.com/*",
    "*://*.zsisk.com/*",
    "*://*.osqa.com/*",
    "*://*.askto.net/*",
    "*://*.bhyuu.com/*",
    "*://*.brunga.at/*",
    "*://*.ccudl.com/*",
    "*://*.clien.net/*",
    "*://*.cnhv.co/*",
    "*://*.co8vd.cn/*",
    "*://*.dbios.org/*",
    "*://*.fromru.su/*",
    "*://*.gimp.es/*",
    "*://*.gyros.es/*",
    "*://*.juste.ru/*",
    "*://*.kirgo.at/*",
    "*://*.lank.ru/*",
    "*://*.minero.pw/*",
    "*://*.minr.pw/*",
    "*://*.mojn.com/*",
    "*://*.mp3red.cc/*",
    "*://*.my-uq.com/*",
    "*://*.nactx.com/*",
    "*://*.oix.com/*",
    "*://*.oix.net/*",
    "*://*.osqa.net/*",
    "*://*.phorm.ch/*",
    "*://*.phorm.cl/*",
    "*://*.phorm.com/*",
    "*://*.phorm.dk/*",
    "*://*.phorm.es/*",
    "*://*.phorm.hk/*",
    "*://*.phorm.in/*",
    "*://*.phorm.jp/*",
    "*://*.phorm.kr/*",
    "*://*.phorm.ro/*",
    "*://*.ppoi.org/*",
    "*://*.puush.in/*",
    "*://*.qip.ru/*",
    "*://*.rocks.io/*",
    "*://*.rpmdo.com/*",
    "*://*.s4d.in/*",
    "*://*.sverd.net/*",
    "*://*.tiku.io/*",
    "*://*.trovi.com/*",
    "*://*.uqz.com/*",
    "*://*.wenda.io/*",
    "*://*.wwnc.xyz/*",
    "*://*.yrwap.cn/*",
    "*://*.ztrf.net/*",
    "*://*.0pn.ru/*",
    "*://*.2leep.com/*",
    "*://*.3fns.com/*",
    "*://*.a-ads.com/*",
    "*://*.a-blog.eu/*",
    "*://*.ad-u.com/*",
    "*://*.ad.net/*",
    "*://*.ad2.pl/*",
    "*://*.ad3.eu/*",
    "*://*.adap.tv/*",
    "*://*.adapd.com/*",
    "*://*.adbit.co/*",
    "*://*.adbnr.ru/*",
    "*://*.adecn.com/*",
    "*://*.adhese.be/*",
    "*://*.adhref.pl/*",
    "*://*.adman.gr/*",
    "*://*.adman.se/*",
    "*://*.adnet.biz/*",
    "*://*.adnet.com/*",
    "*://*.adnet.de/*",
    "*://*.adnxs.com/*",
    "*://*.ads-t.ru/*",
    "*://*.ads.dk/*",
    "*://*.ads.gold/*",
    "*://*.ads8.com/*",
    "*://*.adsrv.me/*",
    "*://*.adtag.cc/*",
    "*://*.adtcp.ru/*",
    "*://*.adtext.pl/*",
    "*://*.adzone.ro/*",
    "*://*.afilo.pl/*",
    "*://*.agkn.com/*",
    "*://*.ako.cc/*",
    "*://*.atdmt.com/*",
    "*://*.awrz.net/*",
    "*://*.bfast.com/*",
    "*://*.bizony.eu/*",
    "*://*.cc-dt.com/*",
    "*://*.ccpmo.com/*",
    "*://*.cwcwcw.tk/*",
    "*://*.dgm2.com/*",
    "*://*.dnps.com/*",
    "*://*.docaz.net/*",
    "*://*.fin.tips/*",
    "*://*.flower.bg/*",
    "*://*.fuuze.net/*",
    "*://*.gem.pl/*",
    "*://*.hirek.top/*",
    "*://*.hirtop.in/*",
    "*://*.hlcc.ca/*",
    "*://*.hooqy.com/*",
    "*://*.imrk.net/*",
    "*://*.jivox.com/*",
    "*://*.jxliu.com/*",
    "*://*.knc.lv/*",
    "*://*.kuhdi.com/*",
    "*://*.le1er.net/*",
    "*://*.lvbet.pl/*",
    "*://*.mhlnk.com/*",
    "*://*.nbads.com/*",
    "*://*.nethir.eu/*",
    "*://*.oix0.net/*",
    "*://*.oix1.net/*",
    "*://*.oix2.net/*",
    "*://*.oix3.net/*",
    "*://*.oix4.net/*",
    "*://*.oix5.net/*",
    "*://*.oix6.net/*",
    "*://*.oix7.net/*",
    "*://*.oix8.net/*",
    "*://*.oix9.net/*",
    "*://*.okel.co/*",
    "*://*.olqdh.top/*",
    "*://*.oopt.fr/*",
    "*://*.pcads.ru/*",
    "*://*.popec.net/*",
    "*://*.prjcq.com/*",
    "*://*.ps4ux.com/*",
    "*://*.rmbn.ru/*",
    "*://*.rqtrk.eu/*",
    "*://*.ru4.com/*",
    "*://*.sagent.io/*",
    "*://*.simpli.fi/*",
    "*://*.sochr.com/*",
    "*://*.spensa.co/*",
    "*://*.sysip.net/*",
    "*://*.tcimg.com/*",
    "*://*.teeser.ru/*",
    "*://*.turn.com/*",
    "*://*.usemax.de/*",
    "*://*.webads.nl/*",
    "*://*.wpadx.com/*",
    "*://*.xaxis.com/*",
    "*://*.xcore.in/*",
    "*://*.yadro.ru/*",
    "*://*.zemgo.com/*",
    "*://*.cya2.net/*",
    "*://*.shorte.st/*",
    "*://*.fioe.info/*",
    "*://*.eforu.com/*",
    "*://*.2site.com/*",
    "*://*.7x.cc/*",
    "*://*.bbs.ws/*",
    "*://*.fo4n.com/*",
    "*://*.lol.to/*",
    "*://*.skocz.pl/*",
    "*://*.1tmg.info/*",
    "*://*.2mdn.info/*",
    "*://*.4clvr.jp/*",
    "*://*.a-cast.jp/*",
    "*://*.aaaf.jp/*",
    "*://*.acuio.org/*",
    "*://*.ad-m.asia/*",
    "*://*.ad-sp.biz/*",
    "*://*.ad-srv.co/*",
    "*://*.ad-v.jp/*",
    "*://*.adapf.com/*",
    "*://*.adclr.jp/*",
    "*://*.adk2x.com/*",
    "*://*.adlove.jp/*",
    "*://*.adlpo.com/*",
    "*://*.admob.com/*",
    "*://*.adnico.jp/*",
    "*://*.adpix.jp/*",
    "*://*.adpon.net/*",
    "*://*.adrcf.com/*",
    "*://*.adsk2.co/*",
    "*://*.adtune.jp/*",
    "*://*.adxxx.me/*",
    "*://*.adxxx.org/*",
    "*://*.adyz.net/*",
    "*://*.affil.jp/*",
    "*://*.aid-ad.jp/*",
    "*://*.apvdr.com/*",
    "*://*.aspm.jp/*",
    "*://*.avdm.mobi/*",
    "*://*.c-web.biz/*",
    "*://*.ca-mp.jp/*",
    "*://*.ca-mpr.jp/*",
    "*://*.cocoad.jp/*",
    "*://*.cosmi.io/*",
    "*://*.cpmly.com/*",
    "*://*.dgpot.com/*",
    "*://*.dlero.net/*",
    "*://*.doga.cm/*",
    "*://*.enlvs.com/*",
    "*://*.exaf.jp/*",
    "*://*.focas.jp/*",
    "*://*.free2.jp/*",
    "*://*.garss.jp/*",
    "*://*.garss.tv/*",
    "*://*.geniee.jp/*",
    "*://*.glam.com/*",
    "*://*.glssp.jp/*",
    "*://*.glssp.net/*",
    "*://*.gsspat.jp/*",
    "*://*.gssprt.jp/*",
    "*://*.href.asia/*",
    "*://*.i2i.com/*",
    "*://*.ilvjp.com/*",
    "*://*.j5sf.com/*",
    "*://*.jetrun.jp/*",
    "*://*.kau.li/*",
    "*://*.ktai.pw/*",
    "*://*.ladsp.com/*",
    "*://*.leaffi.jp/*",
    "*://*.livead.jp/*",
    "*://*.lkjy.net/*",
    "*://*.lmodr.biz/*",
    "*://*.lpdk.net/*",
    "*://*.lveif.com/*",
    "*://*.lvk7.com/*",
    "*://*.mcnt.jp/*",
    "*://*.mediba.jp/*",
    "*://*.mintj.com/*",
    "*://*.moras.jp/*",
    "*://*.mreco0.jp/*",
    "*://*.mttag.com/*",
    "*://*.mycdn2.co/*",
    "*://*.n-ad.work/*",
    "*://*.newzia.jp/*",
    "*://*.nugee.tv/*",
    "*://*.open8.com/*",
    "*://*.pcmax.jp/*",
    "*://*.preaf.jp/*",
    "*://*.push7.jp/*",
    "*://*.pv4u.com/*",
    "*://*.quant.jp/*",
    "*://*.reon.club/*",
    "*://*.ressp.net/*",
    "*://*.rinad.jp/*",
    "*://*.smaad.jp/*",
    "*://*.smetn.com/*",
    "*://*.smopy.com/*",
    "*://*.solty.biz/*",
    "*://*.soraad.jp/*",
    "*://*.spaf.jp/*",
    "*://*.speead.jp/*",
    "*://*.spotx.tv/*",
    "*://*.swcs.jp/*",
    "*://*.taxel.jp/*",
    "*://*.teads.tv/*",
    "*://*.tracer.jp/*",
    "*://*.umeng.com/*",
    "*://*.uncn.jp/*",
    "*://*.v-wrd.com/*",
    "*://*.x-lift.jp/*",
    "*://*.xmax.jp/*",
    "*://*.yuibo.com/*",
    "*://*.ziyu.net/*",
    "*://*.abass.ir/*",
    "*://*.aite.me/*",
    "*://*.alaziz.in/*",
    "*://*.archiv.bg/*",
    "*://*.be6k.ru/*",
    "*://*.belboy.in/*",
    "*://*.bjjgo.com/*",
    "*://*.bulut.app/*",
    "*://*.cameli.vn/*",
    "*://*.chedea.eu/*",
    "*://*.csw.hu/*",
    "*://*.darco.pk/*",
    "*://*.daw2.ga/*",
    "*://*.daxex.pro/*",
    "*://*.dgnj.cn/*",
    "*://*.draked.ug/*",
    "*://*.e-lma.es/*",
    "*://*.fazi.pl/*",
    "*://*.frin.ng/*",
    "*://*.hseda.com/*",
    "*://*.ihpmed.ae/*",
    "*://*.isso.ps/*",
    "*://*.jyv.fi/*",
    "*://*.kejpa.com/*",
    "*://*.kqq.kz/*",
    "*://*.linx.li/*",
    "*://*.lsyr.net/*",
    "*://*.matt-e.it/*",
    "*://*.mbgrm.com/*",
    "*://*.medreg.uz/*",
    "*://*.mrtool.ir/*",
    "*://*.mutec.jp/*",
    "*://*.mvb.kz/*",
    "*://*.myhood.cl/*",
    "*://*.nprg.ru/*",
    "*://*.ohe.ie/*",
    "*://*.omega.az/*",
    "*://*.ph4s.ru/*",
    "*://*.polarr.cc/*",
    "*://*.prosoc.nl/*",
    "*://*.raacts.in/*",
    "*://*.ret.space/*",
    "*://*.rusch.nu/*",
    "*://*.simpl.pw/*",
    "*://*.sslv3.at/*",
    "*://*.sweaty.dk/*",
    "*://*.tumso.org/*",
    "*://*.uskeba.ca/*",
    "*://*.ware.ru/*",
    "*://*.x2vn.com/*",
    "*://*.yeez.net/*",
    "*://*.zuzhi.de/*",
    "*://*.1rx.io/*",
    "*://*.2mdn.net/*",
    "*://*.3lift.com/*",
    "*://*.4info.com/*",
    "*://*.5mcwl.pw/*",
    "*://*.abz.com/*",
    "*://*.ad-pay.de/*",
    "*://*.ad-up.com/*",
    "*://*.adapt.tv/*",
    "*://*.adback.co/*",
    "*://*.adbot.com/*",
    "*://*.adbrn.com/*",
    "*://*.addme.com/*",
    "*://*.adf.ly/*",
    "*://*.adjix.com/*",
    "*://*.adjug.com/*",
    "*://*.adk2.co/*",
    "*://*.adk2.com/*",
    "*://*.adland.ru/*",
    "*://*.admex.com/*",
    "*://*.admix.in/*",
    "*://*.adnet.ru/*",
    "*://*.adsco.re/*",
    "*://*.adsend.de/*",
    "*://*.advnt.com/*",
    "*://*.adworx.at/*",
    "*://*.adworx.nl/*",
    "*://*.adyea.com/*",
    "*://*.affec.tv/*",
    "*://*.ah-ha.com/*",
    "*://*.avocet.io/*",
    "*://*.awin1.com/*",
    "*://*.banner.cz/*",
    "*://*.bebi.com/*",
    "*://*.begun.ru/*",
    "*://*.berp.com/*",
    "*://*.bfmio.com/*",
    "*://*.bidr.io/*",
    "*://*.blis.com/*",
    "*://*.bpath.com/*",
    "*://*.btez8.xyz/*",
    "*://*.chart.dk/*",
    "*://*.cj.com/*",
    "*://*.cjlog.com/*",
    "*://*.coxmt.com/*",
    "*://*.cpays.com/*",
    "*://*.deloo.de/*",
    "*://*.dsp.io/*",
    "*://*.e-m.fr/*",
    "*://*.edaa.eu/*",
    "*://*.emebo.com/*",
    "*://*.emebo.io/*",
    "*://*.emjcd.com/*",
    "*://*.eqads.com/*",
    "*://*.erne.co/*",
    "*://*.eusta.de/*",
    "*://*.evyy.net/*",
    "*://*.ezula.com/*",
    "*://*.f5biz.com/*",
    "*://*.feathr.co/*",
    "*://*.fixel.ai/*",
    "*://*.frtyj.com/*",
    "*://*.frtyk.com/*",
    "*://*.gml.email/*",
    "*://*.h-bid.com/*",
    "*://*.heap.com/*",
    "*://*.heias.com/*",
    "*://*.heyos.com/*",
    "*://*.hgads.com/*",
    "*://*.hit.bg/*",
    "*://*.hit.ua/*",
    "*://*.hitiz.com/*",
    "*://*.hotlog.ru/*",
    "*://*.i1img.com/*",
    "*://*.ioam.de/*",
    "*://*.ip.ro/*",
    "*://*.ipro.com/*",
    "*://*.itop.cz/*",
    "*://*.ivwbox.de/*",
    "*://*.jsrdn.com/*",
    "*://*.kargo.com/*",
    "*://*.kliks.nl/*",
    "*://*.kost.tv/*",
    "*://*.lbn.ru/*",
    "*://*.leady.com/*",
    "*://*.liadm.com/*",
    "*://*.lijit.com/*",
    "*://*.litix.io/*",
    "*://*.lkqd.com/*",
    "*://*.logua.com/*",
    "*://*.lop.com/*",
    "*://*.lytics.io/*",
    "*://*.m2.ai/*",
    "*://*.m4n.nl/*",
    "*://*.m6r.eu/*",
    "*://*.mbuyu.nl/*",
    "*://*.media.net/*",
    "*://*.megapu.sh/*",
    "*://*.mlm.de/*",
    "*://*.mltrk.io/*",
    "*://*.mmtro.com/*",
    "*://*.mopub.com/*",
    "*://*.movad.net/*",
    "*://*.mpstat.us/*",
    "*://*.myads.net/*",
    "*://*.mystat.pl/*",
    "*://*.naj.sk/*",
    "*://*.novem.pl/*",
    "*://*.ns1p.net/*",
    "*://*.ntv.io/*",
    "*://*.ntvk1.ru/*",
    "*://*.nzaza.com/*",
    "*://*.o0bc.com/*",
    "*://*.oewa.at/*",
    "*://*.optmd.com/*",
    "*://*.ostr.io/*",
    "*://*.owlsr.us/*",
    "*://*.oxado.com/*",
    "*://*.p-n.io/*",
    "*://*.pbnet.ru/*",
    "*://*.pokkt.com/*",
    "*://*.popub.com/*",
    "*://*.proper.io/*",
    "*://*.props.id/*",
    "*://*.pstmrk.it/*",
    "*://*.pymx5.com/*",
    "*://*.qctop.com/*",
    "*://*.qnsr.com/*",
    "*://*.rate.ru/*",
    "*://*.recoco.it/*",
    "*://*.rle.ru/*",
    "*://*.roar.com/*",
    "*://*.roq.ad/*",
    "*://*.roxr.net/*",
    "*://*.rs6.net/*",
    "*://*.sabio.us/*",
    "*://*.smrtb.com/*",
    "*://*.sovrn.com/*",
    "*://*.stat.pl/*",
    "*://*.sumo.com/*",
    "*://*.takru.com/*",
    "*://*.tapad.com/*",
    "*://*.targad.de/*",
    "*://*.tcads.net/*",
    "*://*.tfag.de/*",
    "*://*.trafic.ro/*",
    "*://*.trix.net/*",
    "*://*.trkn.us/*",
    "*://*.trmit.com/*",
    "*://*.twyn.com/*",
    "*://*.tyroo.com/*",
    "*://*.untd.com/*",
    "*://*.vpon.com/*",
    "*://*.vrs.cz/*",
    "*://*.vtracy.de/*",
    "*://*.warlog.ru/*",
    "*://*.yldbt.com/*",
    "*://*.z5x.net/*",
    "*://*.zanox.com/*",
    "*://*.zlp6s.pw/*",
    "*://*.zqtk.net/*"]