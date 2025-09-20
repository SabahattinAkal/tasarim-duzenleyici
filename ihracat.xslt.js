<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
	xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
	xmlns:ccts="urn:un:unece:uncefact:documentation:2"
	xmlns:clm54217="urn:un:unece:uncefact:codelist:specification:54217:2001"
	xmlns:clm5639="urn:un:unece:uncefact:codelist:specification:5639:1988"
	xmlns:clm66411="urn:un:unece:uncefact:codelist:specification:66411:2001"
	xmlns:clmIANAMIMEMediaType="urn:un:unece:uncefact:codelist:specification:IANAMIMEMediaType:2003"
	xmlns:fn="http://www.w3.org/2005/xpath-functions" xmlns:link="http://www.xbrl.org/2003/linkbase"
	xmlns:n1="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
	xmlns:qdt="urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2"
	xmlns:udt="urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2"
	xmlns:xbrldi="http://xbrl.org/2006/xbrldi" xmlns:xbrli="http://www.xbrl.org/2003/instance"
	xmlns:xdt="http://www.w3.org/2005/xpath-datatypes" xmlns:xlink="http://www.w3.org/1999/xlink"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:lcl="http://www.efatura.gov.tr/local"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	exclude-result-prefixes="cac cbc ccts clm54217 clm5639 clm66411 clmIANAMIMEMediaType fn link n1 qdt udt xbrldi xbrli xdt xlink xs xsd xsi lcl">
	<xsl:character-map name="a"> 
		<xsl:output-character character="&#128;" string=""/>
		<xsl:output-character character="&#129;" string=""/>
		<xsl:output-character character="&#130;" string=""/>
		<xsl:output-character character="&#131;" string=""/>
		<xsl:output-character character="&#132;" string=""/>
		<xsl:output-character character="&#133;" string=""/>
		<xsl:output-character character="&#134;" string=""/>
		<xsl:output-character character="&#135;" string=""/>
		<xsl:output-character character="&#136;" string=""/>
		<xsl:output-character character="&#137;" string=""/>
		<xsl:output-character character="&#138;" string=""/>
		<xsl:output-character character="&#139;" string=""/>
		<xsl:output-character character="&#140;" string=""/>
		<xsl:output-character character="&#141;" string=""/>
		<xsl:output-character character="&#142;" string=""/>
		<xsl:output-character character="&#143;" string=""/>
		<xsl:output-character character="&#144;" string=""/>
		<xsl:output-character character="&#145;" string=""/>
		<xsl:output-character character="&#146;" string=""/>
		<xsl:output-character character="&#147;" string=""/>
		<xsl:output-character character="&#148;" string=""/>
		<xsl:output-character character="&#149;" string=""/>
		<xsl:output-character character="&#150;" string=""/>
		<xsl:output-character character="&#151;" string=""/>
		<xsl:output-character character="&#152;" string=""/>
		<xsl:output-character character="&#153;" string=""/>
		<xsl:output-character character="&#154;" string=""/>
		<xsl:output-character character="&#155;" string=""/>
		<xsl:output-character character="&#156;" string=""/>
		<xsl:output-character character="&#157;" string=""/>
		<xsl:output-character character="&#158;" string=""/>
		<xsl:output-character character="&#159;" string=""/>
	</xsl:character-map>
	<xsl:decimal-format name="european" decimal-separator="," grouping-separator="." NaN=""/>
	<xsl:output version="4.0" method="html" indent="no" encoding="UTF-8"
		doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN"
		doctype-system="http://www.w3.org/TR/html4/loose.dtd" use-character-maps="a"/>
	<xsl:param name="SV_OutputFormat" select="'HTML'"/>
	<xsl:variable name="XML" select="/"/>	
	
	<xsl:template match="/">
		<html>
			<head>
			<script type="text/javascript">
				<![CDATA[var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();]]>
				</script>
				<style type="text/css">
					body {
					    background-color: #FFFFFF;
					    font-family: 'Tahoma', "Times New Roman", Times, serif;
					    font-size: 11px;
					    color: #666666;
					}
					h1, h2 {
					    padding-bottom: 3px;
					    padding-top: 3px;
					    margin-bottom: 5px;
					    text-transform: uppercase;
					    font-family: Arial, Helvetica, sans-serif;
					}
					h1 {
					    font-size: 1.4em;
					    text-transform:none;
					}
					h2 {
					    font-size: 1em;
					    color: brown;
					}
					h3 {
					    font-size: 1em;
					    color: #333333;
					    text-align: justify;
					    margin: 0;
					    padding: 0;
					}
					h4 {
					    font-size: 1.1em;
					    font-style: bold;
					    font-family: Arial, Helvetica, sans-serif;
					    color: #000000;
					    margin: 0;
					    padding: 0;
					}
					hr {
					    height:2px;
					    color: #000000;
					    background-color: #000000;
					    border-bottom: 1px solid #000000;
					}
					p, ul, ol {
					    margin-top: 1.5em;
					}
					ul, ol {
					    margin-left: 3em;
					}
					blockquote {
					    margin-left: 3em;
					    margin-right: 3em;
					    font-style: italic;
					}
					a {
					    text-decoration: none;
					    color: #70A300;
					}
					a:hover {
					    border: none;
					    color: #70A300;
					}
					#despatchTable {
					    border-collapse:collapse;
					    font-size:11px;
					    float:right;
					    border-color:gray;
					}
					#ettnTable {
					    border-collapse:collapse;
					    font-size:11px;
					    border-color:gray;
					}
					#customerPartyTable {
					    border-width: 0px;
					    border-spacing:;
					    border-color: gray;
					    border-collapse: collapse;
					    background-color:
					}
					#customerIDTable {
					    border-width: 2px;
					    border-spacing:;
					    border-style: inset;
					    border-color: gray;
					    border-collapse: collapse;
					    background-color:
					}
					#customerIDTableTd {
					    border-width: 2px;
					    border-spacing:;
					    border-style: inset;
					    border-color: gray;
					    border-collapse: collapse;
					    background-color:
					}
					#lineTable {
					    border-width:2px;
					    border-spacing:;
					    border-color: black;
					    border-collapse: collapse;
					    background-color:;
					}
					td.lineTableTd {
					    border-width: 1px;
					    padding: 1px;
					    border-style: inset;
					    background-color: white;
					}
					tr.lineTableTr {
					    border-width: 1px;
					    padding: 0px;
					    border-color: black;
					    background-color: white;
					    -moz-border-radius:;
					}
					#lineTableDummyTd {
					    border-width: 1px;
					    border-color:white;
					    padding: 1px;
					    border-color: black;
					    background-color: white;
					}
					td.lineTableBudgetTd {
					    border-width: 2px;
					    border-spacing:0px;
					    padding: 1px;
					    border-style: inset;
					    border-color: black;
					    background-color: white;
					    -moz-border-radius:;
					}
					#notesTable {
					    border-width: 2px;
					    border-spacing:;
					    border-style: inset;
					    border-color: black;
					    border-collapse: collapse;
					    background-color:
					}
					#notesTableTd {
					    border-width: 0px;
					    border-spacing:;
					    border-style: inset;
					    border-color: black;
					    border-collapse: collapse;
					    background-color:
					}
					table {
					    border-spacing:0px;
					}
					#budgetContainerTable {
					    border-width: 0px;
					    border-spacing: 0px;
					    border-color: black;
					    border-collapse: collapse;
					    background-color:;
					}
					td {
					    border-color:gray;
					}
      </style>
				<title>e-Fatura</title>
			</head>
			<body  style="margin-left=0.6in; margin-right=0.6in; margin-top=0.7in; margin-bottom=0.79in">
			
				<xsl:for-each select="$XML">
					<table style="border-color:blue; " border="0" cellspacing="0px" width="800"
						cellpadding="px">
						<tbody>
						<tr border="1">
				<td colspan="3">
						<img style="width:620px; height:140px;" align="middle" src="data:image/jpeg;base64,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"/>
						</td>		
					
						<td align="right">
									<div id="qrcode"/>
									<div id="qrvalue" style="visibility: hidden; height: 30px;width: 30px; ; display:none"> 
{"vkntckn":"<xsl:value-of  select="n1:Invoice/cac:AccountingSupplierParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='TCKN' or @schemeID='VKN']"></xsl:value-of>",
"avkntckn":"<xsl:value-of  select="n1:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='TCKN' or @schemeID='VKN']"></xsl:value-of>",
"senaryo":"<xsl:value-of select="n1:Invoice/cbc:ProfileID"/>",
"tip":"<xsl:value-of select="n1:Invoice/cbc:InvoiceTypeCode"/>",
"tarih":"<xsl:value-of select="n1:Invoice/cbc:IssueDate"/>",
"no":"<xsl:value-of select="n1:Invoice/cbc:ID"/>",
"ETTN":"<xsl:value-of select="n1:Invoice/cbc:UUID"/>",
"parabirimi":"<xsl:value-of select="n1:Invoice/cbc:DocumentCurrencyCode"/>",
"malhizmettoplam":"<xsl:value-of select="n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount"></xsl:value-of>",
<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode='0015']"><xsl:text>  "hesaplanankdv</xsl:text>(<xsl:value-of select="cbc:Percent"/>)":"<xsl:value-of select="cbc:TaxAmount"/>"</xsl:for-each> 
<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode='0015']"><xsl:text> , "kdvmatrah</xsl:text>(<xsl:value-of select="cbc:Percent"/>)":"<xsl:value-of select="cbc:TaxableAmount"/>",</xsl:for-each> 
"vergidahil":"<xsl:value-of select="n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount"/>",
"odenecek":"<xsl:value-of select="n1:Invoice/cac:LegalMonetaryTotal/cbc:PayableAmount"/>",}	

									</div>
									<script type="text/javascript">

										var qrcode = new QRCode(document.getElementById("qrcode"), {
											width : 140,
											height : 140,
											
											correctLevel : QRCode.CorrectLevel.L
										});

										function makeCode (msg) {		
											var elText = document.getElementById("text");
	
											qrcode.makeCode(msg);
										}

										makeCode(document.getElementById("qrvalue").innerHTML);
									</script>
								</td>					
					</tr>
						
						
							<tr valign="top">
								<td width="40%">
									<br/>
										<br/>
										
									<hr/>
									<table align="center" border="0" width="100%">
										<tbody>
											
											<tr align="left">
												<xsl:for-each select="n1:Invoice/cac:AccountingSupplierParty/cac:Party">


													<td align="left">
													<xsl:if test="cac:PartyName">
													<xsl:value-of select="cac:PartyName/cbc:Name"/>
													<br/>

													</xsl:if>
													<xsl:for-each select="cac:Person">
														<xsl:for-each select="cbc:Title">
														<xsl:apply-templates/>

														<xsl:text>&#160;</xsl:text>

														</xsl:for-each>
														<xsl:for-each select="cbc:FirstName">
														<xsl:apply-templates/>

														<xsl:text>&#160;</xsl:text>

														</xsl:for-each>
														<xsl:for-each select="cbc:MiddleName">
														<xsl:apply-templates/>
														<xsl:text>&#160;</xsl:text>
														</xsl:for-each>
														<xsl:for-each select="cbc:FamilyName">
														<xsl:apply-templates/>

														<xsl:text>&#160;</xsl:text>
														</xsl:for-each>
														<xsl:for-each select="cbc:NameSuffix">
														<xsl:apply-templates/>
														</xsl:for-each>
													</xsl:for-each>
													</td>

												</xsl:for-each>

											</tr>
											<tr align="left">
												<xsl:for-each select="n1:Invoice/cac:AccountingSupplierParty/cac:Party">


												<td align="left">
												<xsl:for-each select="cac:PostalAddress">
													<xsl:for-each select="cbc:StreetName">
													<xsl:apply-templates/>
													<xsl:text>&#160;</xsl:text>
													</xsl:for-each>
													<xsl:for-each select="cbc:District">
												<xsl:apply-templates/>
												<span>
												<xsl:text>&#160;</xsl:text>
												</span>
												</xsl:for-each>
													<xsl:for-each select="cbc:BuildingName">
													<xsl:apply-templates/>
													</xsl:for-each>
													<xsl:if test="cbc:BuildingNumber">
													<xsl:text> No:</xsl:text>
													<xsl:for-each select="cbc:BuildingNumber">
													<xsl:apply-templates/>
													</xsl:for-each>
													<xsl:text>&#160;</xsl:text>
													</xsl:if>
													<br/>
													<xsl:for-each select="cbc:PostalZone">
													<xsl:apply-templates/>

													<xsl:text>&#160;</xsl:text>
													</xsl:for-each>
													<xsl:for-each select="cbc:CitySubdivisionName">
													<xsl:apply-templates/>

													</xsl:for-each>
													<xsl:text>/ </xsl:text>
													<xsl:for-each select="cbc:CityName">
													<xsl:apply-templates/>
													<xsl:text>&#160;</xsl:text>
													</xsl:for-each>
												</xsl:for-each>

												</td>
												</xsl:for-each>


											</tr>
											<xsl:if
												test="//n1:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:Telephone or //n1:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:Telefax">
												<tr align="left">
												<xsl:for-each select="n1:Invoice">
												<xsl:for-each select="cac:AccountingSupplierParty">
												<xsl:for-each select="cac:Party">
												<td align="left">
												<xsl:for-each select="cac:Contact">
												<xsl:if test="cbc:Telephone">
												<span>
												<xsl:text>Tel: </xsl:text>
												</span>
												<xsl:for-each select="cbc:Telephone">
												<xsl:apply-templates/>
												</xsl:for-each>
												</xsl:if>
												<xsl:if test="cbc:Telefax">
												<span>
												<xsl:text> Fax: </xsl:text>
												</span>
												<xsl:for-each select="cbc:Telefax">
												<xsl:apply-templates/>
												</xsl:for-each>
												</xsl:if>
												<span>
												<xsl:text>&#160;</xsl:text>
												</span>
												</xsl:for-each>
												</td>
												</xsl:for-each>
												</xsl:for-each>
												</xsl:for-each>
												</tr>
											</xsl:if>
											<xsl:for-each
												select="//n1:Invoice/cac:AccountingSupplierParty/cac:Party/cbc:WebsiteURI">
												<tr align="left">
												<td>
												<xsl:text>Web Sitesi: </xsl:text>
												<xsl:value-of select="."/>
												</td>
												</tr>
											</xsl:for-each>
											<xsl:for-each
												select="//n1:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:ElectronicMail">
												<tr align="left">
												<td>
												<xsl:text>E-Posta: </xsl:text>
												<xsl:value-of select="."/>
												</td>
												</tr>
											</xsl:for-each>
											<tr align="left">
												<xsl:for-each select="n1:Invoice">
												<xsl:for-each select="cac:AccountingSupplierParty">
												<xsl:for-each select="cac:Party">
												<td align="left">
												<span>
												<xsl:text>Vergi Dairesi: </xsl:text>
												</span>
												<xsl:for-each select="cac:PartyTaxScheme">
												<xsl:for-each select="cac:TaxScheme">
												<xsl:for-each select="cbc:Name">
												<xsl:apply-templates/>
												</xsl:for-each>
												</xsl:for-each>
												<span>
												<xsl:text>&#160; </xsl:text>
												</span>
												</xsl:for-each>
												</td>
												</xsl:for-each>
												</xsl:for-each>
												</xsl:for-each>
											</tr>
											<xsl:for-each
												select="//n1:Invoice/cac:AccountingSupplierParty/cac:Party/cac:PartyIdentification">
												<tr align="left">
												<td>
												<xsl:value-of select="cbc:ID/@schemeID"/>
												<xsl:text>: </xsl:text>
												<xsl:value-of select="cbc:ID"/>
												</td>
												</tr>
											</xsl:for-each>
										</tbody>
									</table>
									<hr/>
								</td>
								<td width="40%" align="center" valign="middle" colspan="2">
									<br/>
									<br/>
									<img style="width:91px;" align="middle" alt="E-Fatura Logo"
										src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBoRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgAQAAAAMgAAAGmHBAABAAAAQgAAAAAAAABTaG90d2VsbCAwLjIyLjAAAgACoAkAAQAAAKYBAAADoAkAAQAAAKYBAAAAAAAA/+EJ9Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MjIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI0MjIiIHRpZmY6SW1hZ2VXaWR0aD0iNDIyIiB0aWZmOkltYWdlSGVpZ2h0PSI0MjIiIHRpZmY6T3JpZW50YXRpb249IjEiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAaQBpAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VOiioL6+ttMsp7y8njtbSBGlmnmcIkaKMszMeAABkk0bgT1458QP2nfDvhbxDJ4W8N2F/8AEHxsvB0Hw6gla3PTNzMf3cC567jkelcJqHjHxT+1FJeL4Z1a48B/Bq03i88Vg+Tfa0qZ8wWpb/UwDBzMeTjj+IVTl+JHhz4QeArPT/gf4dtJ7SG/FtqEj6dcuVLQmSGaX7ssiT4wtyPMU/wiQkLXuUcCoO1Vc0/5dkv8T6P+6tel09DzqmIurwdl36v0X6/mdDdaJ8c/HdpJfeJ/GWh/B7QgNz2OhwpfXqIf4ZbubEaN/tRrisTSv2evhJ4v8XXnhrxD4w8W/EHxDaq7Twa9r94UOzZ5gTyzHG2wyR7lTOzeoYDIr1P4l/CeL41aDod415eeGNUjETuypuZ7dmjkmtJoyQGB2Lz1VlBHcHW0D4L+GfDPxC1Xxlp0E9vq2pl3uFWUiFncIHfb3J8tepIB3FQCzZFjeSD5ZcktdIpKz0teW7W/VsHQ5parmXdu/wCGy+4+KPi34e+Cvwt8W+NPDSfBfSr+60p7VNLaTUrkG/zBHcXhY7iV8qKRW4znPOK9b1f4H/Anwn4p1LQNHvPFPgTXtOsZdSdtB1bULYeVFGskjRu7NExVWUkD1I6g4+gfEHwW8EeK9VudS1bw5aX1/cGQy3Eu7e3mQJA/IPG6KKNDjsorD1/9m7wVr2peItQa3vbO/wBes7yyvZ7a8flLpY1nZEYsiMwhQZC9j611vNIzjCLqTTS195u706N7aN7dTH6m4tvli9dNLaa+W/8AkeYeFtE+Lek28M/gP4lP4th+wWuonw98RNM/exxTqWRDf24GZcKQV+bbwTwwJ6rw/wDtT2mka3beHfin4cvfhdr87eXBNqMizaVeN6Q3q/Jnvh9pGQOTVHx/8NvF1l4ss4fBPnpqOq+IV1m8164RFstPtY7B7RINgk3SMn7t1j27WYnJA3Yk8G+L734o+MvEnw08V+FYtY8L6bFNaTXWq+XLPN5TJHHLcIMAGf8AeSJhFwqBlLZ+XOfsq8eecVJWu2rRkvu0evdXfdFR56cuWLad+uqf6r5Ox7+jrKiujBkYZDA5BFOr5QdtX/Za8SX9p4K1R/Hfw/05EuNX8Dtci41bw9A+SJ7XJ3vDgE+U3IAyDySPpTwX400X4h+GLDxD4e1CHVNHvoxLBcwHIYdwR1BByCpwQQQRkV5NfCuilUi+aD2f6NdH+fRtHbSrKb5XpJdP8u/9XNuiiiuI6Ar5m8X3M37U/wARNR8IW9y9t8I/CtwE8R3sTlBrV6mG+wq4/wCWMfBlIPJwPQ13X7TfxD1Twd4FtdE8MMP+E18W3iaFovPMUsv37g+ixR7nz0BC5615L9v8P+GPDKfBnw7pZ8XeE7SyxfX3htxeX9ldQXCec9/aEDzElmOSiszOvmDYV5HuYGhKEPbr4nt5Jby9VtHzvbVI87EVE37N7Lfz7L/Py9To/EfirUNS+KZ8F6PpNv4T1rS7SCTw3GYhPb6rp5a4juIrpIgwhtD9nQKRypeFiMkR17N8P/hZoXw6tIYtMt2MsMBtIZ5yHlitfNeSO2V8AmKMyFUByQuBmsr4HfCWP4R+CLPSJboajfRhla4HmbIkLErDCJHdkiXsm4jJYjGcV6LXHia6b9lRfur8fPv52u92b0aTXvz3/IK+Zf2vv2s4/gnYL4e8NyQ3PjS6QPl1DpYRHo7joXP8Kn6njAPo/wC0d8cLH4D/AA5utcmEc+qz5t9Ns2P+unI4JHXav3mPoMdSK/IfxL4k1Hxdr1/rOr3cl9qV9M09xcSHJdiefoPQdAOBXw2dZo8JH2FF++/wX+Z/QfhlwLHiCs80zGN8NTdkn9uS6f4V17vTue6f8N7/ABl/6GC0/wDBbB/8RR/w3t8Zf+hgtP8AwWwf/EV88gV9ifsa/sejx6bXxx41tSPDiMH0/TZRj7eQf9Y4/wCeQPQfxf7v3vksJWzHGVVSpVZX9Xp5s/oTiDLeDuGsDLH47A0lFaJKEbyfSKVt3+C1eh6x+zL4o+P/AMaGg13X/EMWheDshll/suAT3w9IgU4X/bIx6A84+vJ45HtpEjlMUrIVWXaDtOODjoa8y8Y/tIfDH4XeILfwzrXiW00zUFCJ9kiid1twQNocopWMYxwxGBg9K9NtrmK8t4p4JEmhlUOkkbBldSMggjqCK/RsHGNKLpqpzyW93d39Oh/GHEdevjq8ca8EsNRn/DUYcsXHunZc77v7rI+PtE8Az/AL4gQeJ/HGpy3K27XN3ay2d0ss+vag8TrPcSeZGv2aPyNm6NphCrxxnICiti51K1+AOqad8WPBwkl+DfjDybrX9KjjIXS5JwPL1KGP+FTuUSoB3BweNv0Z478B6L8RNBfS9c0201S3DrNFHexeZGsqnKkgEEjPBGRuUsp4JFeA/DbT00Dxj4p0/wCKfivStd1TXZW0aHR5rZlmisnfy4FMccrxW9vMVbYpRSTJEGkZ2Ar7WniliIudTV2tKP8AMvJdGt79H5Oy/O5UXSkox23T7Pz/ACt1Ppu2uYb22iuLeVJoJUEkcsbBldSMggjqCO9S18//ALM+o3nw/wBd8T/BbWbmS5n8LFLvQbmc5e60aUnyee5hYGInpwor6Arw8RR9hUcL3W6fdPVP7j0aVT2kFLZ9fXqfPujIPib+2HrmoS/vdL+HOjxadaKeVGoXo8yaRT6rCqIfTdXp9z4K8I6t8RYtZ/s5I/F2mQpI1/brJBI8UgkRUkdcLMvyP8jFgCAcDg185fCLwrrvjv4f6x400S2g1W5vviPqHiGXSrq9e0j1G3haS3hhMqq2PLZI5FDAqWiAPByPoL4O2fiCHSdcvfEMipPqOrz3dvpyagb4adGQim387AziRJX2jhPM2DhRXp42PsnaM7ciUbX+/wA9Xd7W13vocdB8+8d3e/5fojvqQkAEk4Apa8a/a6+I7/DL4DeI7+3l8rUL2MabaMDgiSX5SR7qm9h/u187WqxoU5VZbJXPosuwNXM8ZRwVH4qklFerdvwPz3/a++Nknxm+Ld9Lazl/D+kFrHTUB+VlU/PKPd2Gc/3Qo7V4dSk5NPghe5mjiiRpJXYKiKMliTgAe9fjVetPE1ZVZ7tn+leV5bh8mwNLA4ZWhTikvlu35t6vzPe/2Pf2eG+OPj/7RqcLf8Ino5Wa/PIFwx+5AD/tYy2Oig9CRX6ZfEfxEnw3+F/iLWrSCONdG0ue4t4FXCAxxkogA6DIAxXP/s6/Ci2+C3wm0Tw8FRdQ8sXOoSDGZLlwC/PcDhB7IK7Lxn4bs/G3hHWvD95JttdUs5bOVlIyqyIVJHuM5r9Oy7A/UsLyx+OS19ei+R/DHGfFS4mz5VarbwtKXLFd4p+9L1la/pZdD8SNV1S71vU7rUL+eS6vbqVp555TlpHY5ZifUkmv1v8A2P7m9u/2bfAz6gzNOLNkUuefKWV1i/DYFr4y8N/8E8fH9547GnaxPYWXhuKb95q8NwrmaIH/AJZx/eDEdmAA9T3/AEg8PaDZeFtC0/R9NhFvp9hbpbW8Q/gjRQqj8hXkZDgsRQq1KtZNaW1667n6L4s8T5RmmBwuX5ZUjUafPeO0VytJeTd9ultbaGhXgP7Q/g/RdD1jSvHz6fpE+p200apJrt9cR2cdwvMMwtoI3a5nGAqjggKMHgY9+rmPiWryeCNVSK6ns7howIZLW+SylaTcNqJM4IQscLnH8XHNffYWo6VVNddHrbRn8v1oKcGjwb4n63eaTqXwP+M11YTaPe/aYdD1+2miaFktL9Qp8xW+ZVjnCMFbkbuea+ntwr4+8T6HonjP9lH4ry2N5p93qklnLcmWx8XzeIpGazUXCb5pMbJAwJ2IMAFTnnjiP+Hg8v8Aeh/Svell9bG00qEbuDcflo136trfZHnRxMKEm5v4rP57P8kdx+y7oHj/AFX4LfCu78Ha5ZaJYQ2niBdSfU7R7yCSd9UQxAwJPES4CXGHyQo3DHzivqbwXpGoaH4dt7XVptOuNT3yy3E+k2Js7eR3kZyyxF3Kk7ssSxy2498V4/8AsZn+y/h74p8LtxJ4Z8W6vpZX0X7QZlP0KzAj6175XnZnWlPEVIWVuZtaa6tta79TpwkEqUZdbL8kv0Cvh7/gpz4keLRvA2gI/wAk9xc30i+6KiIf/Ij19w1+eX/BTcufHXgsHPl/2dNj6+aM/wBK+LzuTjgKlutvzR+yeF1CNfizCc/2ed/NQlb8dT4ur2n9jvwUnjr9obwnaTxiS0s521GYEZGIVLrn2LhB+NeLV9c/8E1LBJ/jNr90wy1vocgX2LTw8/kP1r87y2mquMpQe11+Gp/ZHGuMngOHMdXpu0lTkl5OXu3+VzqP26vhv8RPiV8X7STw94U1jVNH0/TIrdLi0gZo3kLO7kEf7yj/AIDXxz4o8O674K1mbSNdsrrStThCmS0ugUkQMAy5HbIIP41+4dfjh+054k/4Sz4/+O9QDb0/tSW2RvVYcQr+kYr6DPsFCh/tCk3Kb26H5B4T8TYnNUsmlQhGlh6fxK/M3dWvd21u2dd+xBo8mv8A7SfhbeWeKzFxeOCScbIX2n/vorX6w1+cP/BNLQftnxX8Sasy5Wx0jyQcdGllTH6RtX6PV7fD8OXBcz6t/wCX6H5f4wYlVuJfYx2p04x++8v/AG5BXE/GL4dWnxP8C3ujXUl5HgrcxGwEJmMiZIVRMDGd3K/MMfNnIxkdtRX1MJypyU47o/DpRU4uL2Z8xaH8N20L4XfEjVNb0vxVaan/AMI9c2aXPimbTC7W4tWUpGLBtmwBEyJOcgEdzX46ea3qfzr90f2rfES+Fv2b/iNfswUnRbi1Q/7cy+Sn47pBXxR/w781T/nxH5Gv0nh7NKWGp1a2JdudpL/t1a/mj5bMsHOrKEKWvKvzf/APpZRqvw7/AGjfif4e0Z0trvx54fXX9AeXHlLqVvEYJk54JP7mQ54xXoXwV07xPazXt1qy6vaaXcQqYrHxBqAu7xZlmlBkJGRGrxeSSgOA2QAMZOV+1L4O1W+8L6P468MW5uPF/gW8/tmyhT711AF23VrxziSLPA5JVRWP4cTRLvXLH4ueFf7X8W3fiy13WFjaxqEVSiArPO3ESRkMNpIwcgK7KK/OsfF1I0sYtbe7LyaVk/nG3q79j7/KqkXSxGXSsnL3otq7fXlvdKKvd8z+Fdrs+g6+F/8Agp1oDNaeA9bVfkR7qzkb3YRug/8AHXr7V0DWU1my3GS2e8gIhvI7SbzY4Z9qsyB8DONw5wPoOleJftzeBW8bfs9a1LDH5l1oskeqxgDnahKyflG7n8K8LNKft8FUjHtf7tf0PrOBcb/ZPE+DrVdFz8r/AO304/d71z8oa+tP+CbGpLa/GzWbRiAbrQ5dvuVmhOPyz+VfJhr2P9kLxingj9obwdeTSeXbXN0dPlJOBidTGufYMyn8K/M8uqKli6U33X46H9v8Z4OWP4dx2Hhq3Tk16xXMl87H62a7q0Wg6JqGp3BxBZ28lxIfRUUsf0FfhzqV9Lqmo3N5O26e4laaRvVmJJ/U1+vX7WHiT/hFf2dvHV5u2PLp7WSnvmdhDx/38r8fB1r6TiWpepTpdk39/wDwx+MeCGC5cHjca18UoxX/AG6m3/6Uj9Bv+CY/h/yPCXjbWyv/AB9XsFmrY/55Rs5/9HCvtevm/wD4J/aF/ZH7OWnXO3a2p391dk+uH8ofpFX0hX1OVU/Z4KlHyv8Afr+p+C8e4v67xPjqt9puP/gCUf0CuH+KPjy28IWFvZzWWrXU2q77aBtJVRKH25IR3KqHCCRwM5PlnGTgHtycCvJbnVj4/wBUlstbtbGz0+xiD614X8T2CSoI1LEXUE/3HXjr8y/LzsYGu6tJ25Y7v+v6/I+Vy+lCVT2tZXhDV6/dtrv6K9k5K6PKPiP4hs/i5p3wp+H2leIb3xTbeJ9fXUr+41G3WCddNsSJ5Y5UWNMEuIlBKjOe/Wvq/wApfQV82fss+GrPxj4t8T/Fm208afoV4G0TwpbFSuzTY5WeW4weczzln55wo7Yr6Wr1cTF0YU8LLeC97/E9X92i+R5U5069eriKSajJvlva/L0vZJeeitqJ1r5Y1jT4/wBmPxpqWl6g1xb/AAT8bXLH7TbTPD/wjmoyn51LoQY7eY8hgQEY44Byfqis3xH4c0zxdoV9o2s2UOpaXexNBcWtwu5JEPUEf5xUYetGneFRXhLRr9V5rp92zZnOMrqdN2lHVM5rwNoGuaHf3Ee7R9P8JRIbfTNF023JaGNT8kpmyAS4LFk24Hy4YncW2v7U0fxe+uaEHW+S3X7JfxhSYwZEOYi3TdtIJXqAy56ivnk3niv9keGXS9SfU/FHwbZSlnrdsv2jU/DCngJMuCZrdOqvglAMEEYB6DTLfXbhvDdp8MdaEngO9iiY67Zm2ulkZmle8nuJHzIZmxGEKjG9239MDmxWHlhIxlBc9N7Nflbo+6e3TTU9vBzhmdSbq1FTqpJ66LTd3Sbk+1ruTbbd1Z/CPjn9kf4k+HvGOs6bpnhDV9W022upI7W+t7Yuk8W47HBHquM++ax7b9mr4uWdxFPB4D8QRTROHR1tGBVgcgj8a/UTwt8dvDHie11+88+TTdM0dofN1G/Ait5Y5c+VIjk/dbgjODhlPRhXf2t5BfQRT280c8MqLJHJEwZXQjIYEdQR0NfGLh/CVHzQqP5WP3qfi9n+CgqGKwcLpJNtS1dk9dbXaabXmfLH7Ulr45+Kn7MPhqz07wrqkviLU7i1fVNNSAiS32I5k3L6eYq49QQa+If+GXPiz/0IGuf+Apr9hbi7gtQhmmSISOI03sF3MeijPUn0rF8XePND8CwW8utXjW32gsIY4oJJ5JNq7m2pGrMcLknA4AzXdjcoo4ufta1RqyS6Hy/DHiLmPD+GeX5dhISUpykl7zevRWetkkvRHOfs9+ErjwL8E/BmiXlu1re22mxG4gcYaOVhvdSPUMxBr0JmCgkkADnmuR1T4r+GtI1Pw7Y3F8wk1/Z9glWFzDJvH7vL42jd0AJycivH9evL342DxFoeuLL4E13w5L9qt9RWZVhNoXKyxu5Yh0IjyzYAGY2xkc+sqkaMI0qXvNaJei/yPz14TEZliamNxn7uM25Sk1tzSabS3aUtHa9vz634h+L4vHWv6n8NLRr/AEbV2jjnhvLi3Js73ad7QOUO9Y2ClSw2kgNgnGG828VPqPxg1OH4HeGNVvbjQdNC/wDCb+IjcGZreAncNLinwC8jfcLH5lRfmyxYU6Txtrvx11N9A+FFwfsUUX9na38W7q0jSR4g2WgsSqqJZMk/OoCKeRyQa9++GPwx8P8Awi8IWnhzw5afZrGDLvJId01xKfvyyv1d2PJJ+gwAAPco0f7Pbr1/4r+Ffyro5ea6L5vpfwcXjI4ulHB4ZWpLWT/mlazadk7O3Xbpvpv6PpFnoGk2emadbR2dhZwpb29vCu1Io1AVVUdgAAKuUUVwttu7OZK2iCiiikMa6LIhVgGVhggjIIrwnxD+y8NA1y68SfCXxHP8NdcuH825sLeIT6PfN6zWhwqk9N8e0jJOCa94oroo4iph23Te+63T9U9H8zKdOFT4l/n958uT+MPF/ga3Nl8RvgvLeWIv4tSm1v4cAXltc3ERUpLLa/LMMFEJ3bvuj0qj4c+NvwXuvi/qfjFviTb6Tqd3bmA6br1tPYS2zeXHHsLSlF8seXu2bfvOx3dMfWNfOn7YX/Iqx/7hrso0sHjasYVKXK77xdlf0af4NI1+v47BU5unWbTTTTV9Ha6v52XnoZfgnxZ4P0HwVbabe/G3wjqM9vrttqa3T+IonP2eNoy8RZpOS2x+w+98xY7naT46fHD4HeM9N0uzv/iXoTzWF8LuNbGIat5v7t42jMUYcMGWQ8EEZA4Nfmrqf/IeH+9/Wvvr9h/oP9w/yr3Mbw5g8BhueTlJW2ul+NmctHiXH4nFqtFqM027pdXo9PToa2neNJfFmk+HNO+H3we8R+M20OD7PY+IPGoGl2IXKMJD5mGmAaNGCiMbSi7cYGOtg/Zp8QfFHUU1X40+KU8QxAqy+E9ARrPSE2klRKc+bc4JJG8gDJ4wa+hx0FLXzscTGhphaah57y+97fJI6KrrYp3xVRz30e2ru9PN6+pU0vSrLQ9Ot7DTrSCwsbdBHDbW0YjjjUdFVRwAPQVbooribbd2VtogooopAf/Z"/>

									<h1 align="center">
										<span style="font-weight:bold;">
											<xsl:text>e-FATURA</xsl:text>
										</span>
									</h1>
								</td>
								
								
								
					           	<td align="right" valign="middle">
									<img style="width:230px; height:150;" align="middle" src=""/>	
								</td>
								<!-- logo LOGO  Logo -->

								
							</tr>
							<tr style="height:118px; " valign="top">
								<td width="40%" align="right" valign="bottom">
									<table id="customerPartyTable" align="left" border="0">
										<tbody>
											<tr style="height:71px; ">
												<td>
												<hr/>
												<table align="center" border="0">
												<tbody>
												<tr>
												<xsl:for-each select="n1:Invoice/cac:AccountingCustomerParty/cac:Party">
													<td style="width:469px; " align="left">
														<span style="font-weight:bold; ">
															<xsl:text>SAYIN</xsl:text>
														</span>
													</td>
												</xsl:for-each>													
												</tr>
												<tr>
													<xsl:choose>
														<xsl:when test="n1:Invoice/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='PARTYTYPE' and text()='TAXFREE']">
															<xsl:for-each select="n1:Invoice/cac:BuyerCustomerParty/cac:Party">
																<xsl:call-template name="Party_Title">
																	<xsl:with-param name="PartyType">TAXFREE</xsl:with-param>
																</xsl:call-template>
															</xsl:for-each>															
														</xsl:when>
														<xsl:when test="n1:Invoice/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='PARTYTYPE' and text()='EXPORT']">
															<xsl:for-each select="n1:Invoice/cac:BuyerCustomerParty/cac:Party">
																<xsl:call-template name="Party_Title">
																	<xsl:with-param name="PartyType">EXPORT</xsl:with-param>
																</xsl:call-template>
															</xsl:for-each>															
														</xsl:when>
														<xsl:otherwise>
															<xsl:for-each select="n1:Invoice/cac:AccountingCustomerParty/cac:Party">
																<xsl:call-template name="Party_Title">
																	<xsl:with-param name="PartyType">OTHER</xsl:with-param>
																</xsl:call-template>
															</xsl:for-each>															
														</xsl:otherwise>
													</xsl:choose>													
												</tr>
													<xsl:choose>
														<xsl:when test="n1:Invoice/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='PARTYTYPE' and text()='TAXFREE']">
																<xsl:for-each select="n1:Invoice/cac:BuyerCustomerParty/cac:Party">
																	<tr>
																		<xsl:call-template name="Party_Adress">
																			<xsl:with-param name="PartyType">TAXFREE</xsl:with-param>
																		</xsl:call-template>
																	</tr>
																	<xsl:call-template name="Party_Other">
																		<xsl:with-param name="PartyType">TAXFREE</xsl:with-param>
																	</xsl:call-template>
																</xsl:for-each>															
														</xsl:when>
														<xsl:when test="n1:Invoice/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='PARTYTYPE' and text()='EXPORT']">
															<xsl:for-each select="n1:Invoice/cac:BuyerCustomerParty/cac:Party">
																<tr>
																	<xsl:call-template name="Party_Adress">
																		<xsl:with-param name="PartyType">EXPORT</xsl:with-param>
																	</xsl:call-template>
																</tr>
																<xsl:call-template name="Party_Other">
																	<xsl:with-param name="PartyType">EXPORT</xsl:with-param>
																</xsl:call-template>
															</xsl:for-each>															
														</xsl:when>
														<xsl:otherwise>
															<xsl:for-each select="n1:Invoice/cac:AccountingCustomerParty/cac:Party">
																<tr>
																	<xsl:call-template name="Party_Adress">
																		<xsl:with-param name="PartyType">OTHER</xsl:with-param>																	
																	</xsl:call-template>
																</tr>
																<xsl:call-template name="Party_Other">
																	<xsl:with-param name="PartyType">OTHER</xsl:with-param>
																</xsl:call-template>
															</xsl:for-each>
														</xsl:otherwise>
													</xsl:choose>																										
												</tbody>
												</table>
												<hr/>
												</td>
											</tr>
										</tbody>
									</table>
									<br/>
								</td>
									<td align="middle" valign="middle" colspan="2">
									<!--<img style="width:230px; height:150;" align="middle" src=""/>-->
									<!--imza IMZA İmza Imza İMZA-->
								</td>  
  
								<td width="50%" valign="bottom" >
									<table border="1" id="despatchTable">
										<tbody>
											<tr>
												<td style="width:105px;" align="left">
												<span style="font-weight:bold; ">
												<xsl:text>Özelleştirme No:</xsl:text>
												</span>
												</td>
												<td style="width:110px;" align="left">
													<xsl:for-each select="n1:Invoice/cbc:CustomizationID">
														<xsl:apply-templates/>
													</xsl:for-each>
												</td>
											</tr>
											<tr style="height:13px; ">
												<td align="left">
												<span style="font-weight:bold; ">
												<xsl:text>Senaryo:</xsl:text>
												</span>
												</td>
												<td align="left">
													<xsl:for-each select="n1:Invoice/cbc:ProfileID">
														<xsl:apply-templates/>
													</xsl:for-each>
												</td>
											</tr>
											<tr style="height:13px; ">
												<td align="left">
												<span style="font-weight:bold; ">
												<xsl:text>Fatura Tipi:</xsl:text>
												</span>
												</td>
												<td align="left">
													<xsl:for-each select="n1:Invoice/cbc:InvoiceTypeCode">
														<xsl:apply-templates/>
													</xsl:for-each>
												</td>
											</tr>
											<tr style="height:13px; ">
												<td align="left">
												<span style="font-weight:bold; ">
												<xsl:text>Fatura No:</xsl:text>
												</span>
												</td>
												<td align="left">
													<xsl:for-each select="n1:Invoice/cbc:ID">
														<xsl:apply-templates/>
													</xsl:for-each>
												</td>
											</tr>
											<tr style="height:13px; ">
												<td align="left">
												<span style="font-weight:bold; ">
												<xsl:text>Fatura Tarihi:</xsl:text>
												</span>
												</td>
												<td align="left">
													<xsl:for-each select="n1:Invoice/cbc:IssueDate">
														<xsl:apply-templates select="."/>
													</xsl:for-each>
												</td>
											</tr>
											<xsl:for-each select="n1:Invoice/cac:DespatchDocumentReference">
												<tr style="height:13px; ">
													<td align="left">
														<span style="font-weight:bold; ">
															<xsl:text>İrsaliye No:</xsl:text>
														</span>
														<xsl:text>&#160;</xsl:text>
													</td>
													<td align="left">
														<xsl:value-of select="cbc:ID"/>
													</td>
												</tr>
												<tr style="height:13px; ">
													<td align="left">
														<span style="font-weight:bold; ">
															<xsl:text>İrsaliye Tarihi:</xsl:text>
														</span>
													</td>
													<td align="left">
														<xsl:for-each select="cbc:IssueDate">
															<xsl:apply-templates select="."/>
														</xsl:for-each>
													</td>
												</tr>
											</xsl:for-each>
											<xsl:if test="//n1:Invoice/cac:OrderReference">
												<tr style="height:13px">
													<td align="left">
														<span style="font-weight:bold; ">
															<xsl:text>Sipariş No:</xsl:text>
														</span>
													</td>
													<td align="left">
														<xsl:for-each select="n1:Invoice/cac:OrderReference/cbc:ID">
															<xsl:apply-templates/>
														</xsl:for-each>
													</td>
												</tr>
											</xsl:if>
											<xsl:if	test="//n1:Invoice/cac:OrderReference/cbc:IssueDate">
												<tr style="height:13px">
													<td align="left">
														<span style="font-weight:bold; ">
														<xsl:text>Sipariş Tarihi:</xsl:text>
														</span>
													</td>
													<td align="left">
														<xsl:for-each select="n1:Invoice/cac:OrderReference/cbc:IssueDate">
															<xsl:apply-templates select="."/>
														</xsl:for-each>
													</td>
												</tr>
											</xsl:if>
											<xsl:for-each select="n1:Invoice/cac:TaxRepresentativeParty/cac:PartyIdentification/cbc:ID[@schemeID='ARACIKURUMVKN']"> 
												<tr>
													<td style="width:105px;" align="left">
														<span style="font-weight:bold; ">
															<xsl:text>Aracı Kurum VKN:</xsl:text>
														</span>
													</td>
													<td style="width:110px;" align="left">
														<xsl:value-of select="."/>
													</td>
												</tr>
												<tr>
													<td style="width:105px;" align="left">
														<span style="font-weight:bold; ">
															<xsl:text>Aracı Kurum Unvan:</xsl:text>
														</span>
													</td>
													<td style="width:110px;" align="left">
														<xsl:value-of select="../../cac:PartyName/cbc:Name"/>
													</td>
												</tr>
											</xsl:for-each>											
										</tbody>
									</table>
								</td>
							</tr>
							<tr align="left">
								<td align="left" valign="top" id="ettnTable">
									<span style="font-weight:bold; ">
										<xsl:text>ETTN:&#160;</xsl:text>
									</span>
									<xsl:for-each select="n1:Invoice/cbc:UUID">
										<xsl:apply-templates/>
									</xsl:for-each>
								</td>
							</tr>
							
							<tr><td><br/></td></tr>
							<!-- <xsl:if test="//n1:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID = 7750409379"> -->
											
							<!-- <tr> -->
							<!-- <td> -->
								<!-- <table border="1"> -->
										<!-- <tbody> -->
											<!-- <tr> -->
												<!-- <td style="width:105px; " align="left"> -->
													<!-- <span style="font-weight:bold; "> -->
														<!-- <xsl:text>Sağlık Fatura Tipi:</xsl:text> -->
													<!-- </span> -->
												<!-- </td> -->
												<!-- <td align="left"> -->
													<!-- <xsl:for-each select="n1:Invoice"> -->
														<!-- <xsl:for-each select="cbc:AccountingCost"> -->
															<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
													<!-- </xsl:for-each> -->
												<!-- </td> -->
											<!-- </tr> -->
											<!-- <xsl:if test="//n1:Invoice/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='MUKELLEF_KODU'"> -->
											<!-- <tr style="height:13px; "> -->
												<!-- <td align="left"> -->
													<!-- <span style="font-weight:bold; "> -->
														<!-- <xsl:text>Mükellef Kodu:</xsl:text> -->
													<!-- </span> -->
												<!-- </td> -->
												<!-- <td align="left"> -->
													<!-- <xsl:for-each select="n1:Invoice"> -->
														<!-- <xsl:for-each select="cac:AdditionalDocumentReference[cbc:DocumentTypeCode='MUKELLEF_KODU']/cbc:DocumentType"> -->
															<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
													<!-- </xsl:for-each> -->
												<!-- </td> -->
											<!-- </tr> -->
											<!-- </xsl:if> -->
											<!-- <xsl:if test="//n1:Invoice/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='MUKELLEF_ADI'"> -->
											<!-- <tr style="height:13px; "> -->
												<!-- <td align="left"> -->
													<!-- <span style="font-weight:bold; "> -->
														<!-- <xsl:text>Mükellef Adı:</xsl:text> -->
													<!-- </span> -->
												<!-- </td> -->
												<!-- <td align="left"> -->
													<!-- <xsl:for-each select="n1:Invoice"> -->
															<!-- <xsl:for-each select="cac:AdditionalDocumentReference[cbc:DocumentTypeCode='MUKELLEF_ADI']/cbc:DocumentType"> -->
														<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
													<!-- </xsl:for-each> -->
												<!-- </td> -->
											<!-- </tr> -->
											<!-- </xsl:if> -->
											<!-- <xsl:if test="//n1:Invoice/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='DOSYA_NO'"> -->
											<!-- <tr style="height:13px; "> -->
												<!-- <td align="left"> -->
													<!-- <span style="font-weight:bold; "> -->
														<!-- <xsl:text>Dosya No:</xsl:text> -->
													<!-- </span> -->
												<!-- </td> -->
												<!-- <td align="left"> -->
													<!-- <xsl:for-each select="n1:Invoice"> -->
															<!-- <xsl:for-each select="cac:AdditionalDocumentReference[cbc:DocumentTypeCode='DOSYA_NO']/cbc:DocumentType"> -->
															<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
													<!-- </xsl:for-each> -->
												<!-- </td> -->
											<!-- </tr> -->
											<!-- </xsl:if> -->
											 <!-- <xsl:if test="//n1:Invoice/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='HARCAMA_REFERANS_NO'"> -->
                      <!-- <tr style="height:13px; "> -->
                        <!-- <td align="left"> -->
                          <!-- <span style="font-weight:bold; "> -->
                            <!-- <xsl:text>Harcama Ref.No:</xsl:text> -->
                          <!-- </span> -->
                        <!-- </td> -->
                        <!-- <td align="left"> -->
                          <!-- <xsl:for-each select="n1:Invoice"> -->
                              <!-- <xsl:for-each select="cac:AdditionalDocumentReference[cbc:DocumentTypeCode='HARCAMA_REFERANS_NO']/cbc:DocumentType"> -->
                              <!-- <xsl:apply-templates/> -->
                            <!-- </xsl:for-each> -->
                          <!-- </xsl:for-each> -->
                        <!-- </td> -->
                      <!-- </tr> -->
                      <!-- </xsl:if> -->
                      <!-- <xsl:if test="//n1:Invoice/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='ABONE_NO'"> -->
                      <!-- <tr style="height:13px; "> -->
                        <!-- <td align="left"> -->
                          <!-- <span style="font-weight:bold; "> -->
                            <!-- <xsl:text>Abone No:</xsl:text> -->
                          <!-- </span> -->
                        <!-- </td> -->
                        <!-- <td align="left"> -->
                          <!-- <xsl:for-each select="n1:Invoice"> -->
                              <!-- <xsl:for-each select="cac:AdditionalDocumentReference[cbc:DocumentTypeCode='ABONE_NO']/cbc:DocumentType"> -->
                              <!-- <xsl:apply-templates/> -->
                            <!-- </xsl:for-each> -->
                          <!-- </xsl:for-each> -->
                        <!-- </td> -->
                      <!-- </tr> -->
                      <!-- </xsl:if> -->
											<!-- <xsl:if test="//n1:Invoice/cac:InvoicePeriod/cbc:StartDate or //n1:Invoice/cac:InvoicePeriod/cbc:EndDate"> -->
											<!-- <tr style="height:13px; "> -->
												<!-- <td align="left"> -->
													<!-- <span style="font-weight:bold; "> -->
														<!-- <xsl:text>Dönem:</xsl:text> -->
													<!-- </span> -->
												<!-- </td> -->
												<!-- <td align="left"> -->
													<!-- <xsl:for-each select="n1:Invoice"> -->
															<!-- <xsl:for-each select="cac:InvoicePeriod/cbc:StartDate"> -->

															<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
														<!-- <span> -->
															<!-- <xsl:text> / </xsl:text> -->
														<!-- </span> -->
															<!-- <xsl:for-each select="cac:InvoicePeriod/cbc:EndDate"> -->

															<!-- <xsl:apply-templates/> -->
														<!-- </xsl:for-each> -->
													<!-- </xsl:for-each> -->
													
												<!-- </td> -->
												<!-- </tr> -->
												<!-- </xsl:if> -->
											
											<!-- </tbody> -->
											<!-- </table> -->
							<!-- </td> -->
							<!-- </tr> -->
							<!-- </xsl:if> -->
							<tr><td><br/></td></tr>
						</tbody>
					</table>
					<div id="lineTableAligner">
						<span>
							<xsl:text>&#160;</xsl:text>
						</span>
					</div>
					<table border="1" id="lineTable" width="800">
						<tbody>
							<tr class="lineTableTr">
								<td class="lineTableTd" style="width:3%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>Sıra No</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:20%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>Mal Hizmet</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:7.4%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>Miktar</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:9%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>Birim Fiyat</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:7%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>İskonto Oranı</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:9%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>İskonto Tutarı</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:7%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>KDV Oranı</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:10%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>KDV Tutarı</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:17%; " align="center">
									<span style="font-weight:bold;">
										<xsl:text>Diğer Vergiler</xsl:text>
									</span>
								</td>
								<td class="lineTableTd" style="width:10.6%" align="center">
									<span style="font-weight:bold;">
										<xsl:text>Mal Hizmet Tutarı</xsl:text>
									</span>
								</td>
								<xsl:if test="//n1:Invoice/cbc:ProfileID='IHRACAT'">
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Teslim Şartı</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Eşya Kap Cinsi</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Kap No</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Kap Adet</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Teslim/Bedel Ödeme Yeri</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>Gönderilme Şekli</xsl:text>
										</span>
									</td>									
									<td class="lineTableTd" style="width:10.6%" align="center">
										<span style="font-weight:bold;">
											<xsl:text>GTİP</xsl:text>
										</span>
									</td>									
								</xsl:if>
							</tr>
							<xsl:if test="count(//n1:Invoice/cac:InvoiceLine) &gt;= 0">
								<xsl:for-each select="//n1:Invoice/cac:InvoiceLine">
									<xsl:apply-templates select="."/>
								</xsl:for-each>
							</xsl:if>
							
						</tbody>
					</table>
				</xsl:for-each>
				<table id="budgetContainerTable" width="800px">
					<tr align="right">
						<td/>
						<td class="lineTableBudgetTd" align="right" width="200px">
							<span style="font-weight:bold; ">
								<xsl:text>Mal Hizmet Toplam Tutarı</xsl:text>
							</span>
						</td>
						<td class="lineTableBudgetTd" style="width:81px; " align="right">
							<xsl:for-each select="n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount">
								<xsl:call-template name="Curr_Type"/>
							</xsl:for-each>
						</td>
					</tr>
					<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal">
						<xsl:if test="cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode = '4171'">
							<tr align="right">
								<td/>
								<td class="lineTableBudgetTd" align="right" width="200px">
									<span style="font-weight:bold; ">
										<xsl:text>Teslim Bedeli</xsl:text>
									</span>
								</td>
								<td class="lineTableBudgetTd" style="width:81px; " align="right">
									<xsl:for-each select="//n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount">
										<xsl:call-template name="Curr_Type"/>
									</xsl:for-each>
								</td>
							</tr>
						</xsl:if>
					</xsl:for-each>
					<tr align="right">
						<td/>
						<td class="lineTableBudgetTd" align="right" width="200px">
							<span style="font-weight:bold; ">
								<xsl:text>Toplam İskonto</xsl:text>
							</span>
						</td>
						<td class="lineTableBudgetTd" style="width:81px; " align="right">
							<xsl:for-each select="n1:Invoice/cac:LegalMonetaryTotal/cbc:AllowanceTotalAmount">
								<xsl:call-template name="Curr_Type"/>
							</xsl:for-each>
						</td>
					</tr>
					<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal">
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Hesaplanan </xsl:text>
									<xsl:value-of select="cac:TaxCategory/cac:TaxScheme/cbc:Name"/>
									<xsl:if test="../../cbc:InvoiceTypeCode!='OZELMATRAH'">
										<xsl:text>(%</xsl:text>
										<xsl:value-of select="cbc:Percent"/>
										<xsl:text>)</xsl:text>
									</xsl:if>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:if test="../../cbc:InvoiceTypeCode='OZELMATRAH'">
									<xsl:text> </xsl:text>
									<xsl:text>DAHİLDİR</xsl:text>
								</xsl:if>
								<xsl:if test="../../cbc:InvoiceTypeCode!='OZELMATRAH'">
									<xsl:for-each select="cac:TaxCategory/cac:TaxScheme">
										<xsl:text> </xsl:text>
										<xsl:value-of
											select="format-number(../../cbc:TaxAmount, '###.##0,00', 'european')"/>
										<xsl:if test="../../cbc:TaxAmount/@currencyID">
											<xsl:text> </xsl:text>
											<xsl:if test="../../cbc:TaxAmount/@currencyID = 'TRL' or ../../cbc:TaxAmount/@currencyID = 'TRY'">
												<xsl:text>TL</xsl:text>
											</xsl:if>
											<xsl:if test="../../cbc:TaxAmount/@currencyID != 'TRL' and ../../cbc:TaxAmount/@currencyID != 'TRY'">
												<xsl:value-of select="../../cbc:TaxAmount/@currencyID"/>
											</xsl:if>
										</xsl:if>
									</xsl:for-each>
								</xsl:if>
							</td>
						</tr>
					</xsl:for-each>
					<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal">
						<xsl:if test="cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode = '4171'">
							<tr align="right">
								<td/>
								<td class="lineTableBudgetTd" align="right" width="200px">
									<span style="font-weight:bold; ">
										<xsl:text>KDV Matrahı</xsl:text>
									</span>
								</td>
								<td class="lineTableBudgetTd" style="width:81px; " align="right">
									<xsl:value-of
											select="format-number(sum(//n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=0015]/cbc:TaxableAmount), '###.##0,00', 'european')"/>										
									<xsl:if
										test="//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID">
										<xsl:text> </xsl:text>
										<xsl:if
											test="//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID = 'TRL' or //n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID = 'TRY'">
											<xsl:text>TL</xsl:text>
										</xsl:if>
										<xsl:if
											test="//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID != 'TRL' and //n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID != 'TRY'">
											<xsl:value-of
												select="//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount/@currencyID"
											/>
										</xsl:if>
									</xsl:if>
								</td>
							</tr>
							<tr align="right">
								<td/>
								<td class="lineTableBudgetTd" align="right" width="200px">
									<span style="font-weight:bold; ">
										<xsl:text>Tevkifat Dahil Toplam Tutar</xsl:text>
									</span>
								</td>
								<td class="lineTableBudgetTd" style="width:81px; " align="right">
									<xsl:for-each select="//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount">
										<xsl:call-template name="Curr_Type"/>
									</xsl:for-each>
								</td>
							</tr>
							<tr align="right">
								<td/>
								<td class="lineTableBudgetTd" align="right" width="200px">
									<span style="font-weight:bold; ">
										<xsl:text>Tevkifat Hariç Toplam Tutar</xsl:text>
									</span>
								</td>
								<td class="lineTableBudgetTd" style="width:81px; " align="right">
									<xsl:for-each select="//n1:Invoice/cac:LegalMonetaryTotal/cbc:PayableAmount">
										<xsl:call-template name="Curr_Type"/>
									</xsl:for-each>
								</td>
							</tr>
						</xsl:if>						
					</xsl:for-each>
					<xsl:for-each select="n1:Invoice/cac:WithholdingTaxTotal/cac:TaxSubtotal">
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Hesaplanan KDV Tevkifat</xsl:text>
									<xsl:text>(%</xsl:text>
									<xsl:value-of select="cbc:Percent"/>
									<xsl:text>)</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:for-each select="cac:TaxCategory/cac:TaxScheme">
									<xsl:text> </xsl:text>
									<xsl:value-of
										select="format-number(../../cbc:TaxAmount, '###.##0,00', 'european')"/>
									<xsl:if test="../../cbc:TaxAmount/@currencyID">
										<xsl:text> </xsl:text>
										<xsl:if test="../../cbc:TaxAmount/@currencyID = 'TRL' or ../../cbc:TaxAmount/@currencyID = 'TRY'">
											<xsl:text>TL</xsl:text>
										</xsl:if>
										<xsl:if test="../../cbc:TaxAmount/@currencyID != 'TRL' and ../../cbc:TaxAmount/@currencyID != 'TRY'">
											<xsl:value-of select="../../cbc:TaxAmount/@currencyID"/>
										</xsl:if>
									</xsl:if>
								</xsl:for-each>
							</td>
						</tr>
					</xsl:for-each>
					<xsl:if
						test="sum(n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=9015]/cbc:TaxableAmount)>0">
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Tevkifata Tabi İşlem Tutarı</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:value-of
									select="format-number(sum(n1:Invoice/cac:InvoiceLine[cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=9015]/cbc:LineExtensionAmount), '###.##0,00', 'european')"/>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode = 'TRL'">
									<xsl:text>TL</xsl:text>
								</xsl:if>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode != 'TRL'">
									<xsl:value-of select="n1:Invoice/cbc:DocumentCurrencyCode"/>
								</xsl:if>
							</td>
						</tr>
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Tevkifata Tabi İşlem Üzerinden Hes. KDV</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:value-of
									select="format-number(sum(n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=9015]/cbc:TaxableAmount), '###.##0,00', 'european')"/>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode = 'TRL'">
									<xsl:text>TL</xsl:text>
								</xsl:if>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode != 'TRL'">
									<xsl:value-of select="n1:Invoice/cbc:DocumentCurrencyCode"/>
								</xsl:if>
							</td>
						</tr>
					</xsl:if>					
					<xsl:if test = "n1:Invoice/cac:InvoiceLine[cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme]">
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Tevkifata Tabi İşlem Tutarı</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:if test = "n1:Invoice/cac:InvoiceLine[cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme]">
									<xsl:value-of
										select="format-number(sum(n1:Invoice/cac:InvoiceLine[cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme]/cbc:LineExtensionAmount), '###.##0,00', 'european')"/>
								</xsl:if>
								<xsl:if test = "//n1:Invoice/cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=&apos;9015&apos;">
									<xsl:value-of
										select="format-number(sum(n1:Invoice/cac:InvoiceLine[cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=9015]/cbc:LineExtensionAmount), '###.##0,00', 'european')"/>
								</xsl:if>								
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode = 'TRL' or n1:Invoice/cbc:DocumentCurrencyCode = 'TRY'">
									<xsl:text>TL</xsl:text>
								</xsl:if>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode != 'TRL' and n1:Invoice/cbc:DocumentCurrencyCode != 'TRY'">
									<xsl:value-of select="n1:Invoice/cbc:DocumentCurrencyCode"/>
								</xsl:if>
							</td>
						</tr>
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="211px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Tevkifata Tabi İşlem Üzerinden Hes. KDV</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:if test = "n1:Invoice/cac:InvoiceLine[cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme]">
									<xsl:value-of
										select="format-number(sum(n1:Invoice/cac:WithholdingTaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme]/cbc:TaxableAmount), '###.##0,00', 'european')"/>
								</xsl:if>
								<xsl:if test = "//n1:Invoice/cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=&apos;9015&apos;">
									<xsl:value-of
										select="format-number(sum(n1:Invoice/cac:TaxTotal/cac:TaxSubtotal[cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode=9015]/cbc:TaxableAmount), '###.##0,00', 'european')"/>
								</xsl:if>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode = 'TRL' or n1:Invoice/cbc:DocumentCurrencyCode = 'TRY'">
									<xsl:text>TL</xsl:text>
								</xsl:if>
								<xsl:if test="n1:Invoice/cbc:DocumentCurrencyCode != 'TRL' and n1:Invoice/cbc:DocumentCurrencyCode != 'TRY'">
									<xsl:value-of select="n1:Invoice/cbc:DocumentCurrencyCode"/>
								</xsl:if>
							</td>
						</tr>
					</xsl:if>
					<tr align="right">
						<td/>
						<td class="lineTableBudgetTd" width="200px" align="right">
							<span style="font-weight:bold; ">
								<xsl:text>Vergiler Dahil Toplam Tutar</xsl:text>
							</span>
						</td>
						<td class="lineTableBudgetTd" style="width:82px; " align="right">
							<xsl:for-each select="n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount">
								<xsl:call-template name="Curr_Type"/>
							</xsl:for-each>
						</td>
					</tr>
					<tr align="right">
						<td/>
						<td class="lineTableBudgetTd" width="200px" align="right">
							<span style="font-weight:bold; ">
								<xsl:text>Ödenecek Tutar</xsl:text>
							</span>
						</td>
						<td class="lineTableBudgetTd" style="width:82px; " align="right">
							<xsl:for-each select="n1:Invoice/cac:LegalMonetaryTotal/cbc:PayableAmount">
								<xsl:call-template name="Curr_Type"/>
							</xsl:for-each>
						</td>
					</tr>
					<xsl:for-each select="n1:Invoice/cac:TaxTotal/cac:TaxSubtotal">
						<xsl:if	test="//n1:Invoice/cbc:DocumentCurrencyCode != 'TRY' and //n1:Invoice/cbc:DocumentCurrencyCode != 'TRL'">
							<tr align="right">
								<td/>
								<td class="lineTableBudgetTd" align="right" width="200px">
									<span style="font-weight:bold; ">
										<xsl:text>Hesaplanan </xsl:text>
										<xsl:value-of select="cac:TaxCategory/cac:TaxScheme/cbc:Name"/>
										<xsl:text>(%</xsl:text>
										<xsl:value-of select="cbc:Percent"/>
										<xsl:text>) (TL)</xsl:text>
									</span>
								</td>
								<td class="lineTableBudgetTd" style="width:81px; " align="right">
									<span>
										<xsl:value-of
											select="format-number(cbc:TaxAmount * //n1:Invoice/cac:PricingExchangeRate/cbc:CalculationRate, '###.##0,00', 'european')"/>
										<xsl:text> TL</xsl:text>
									</span>
								</td>
							</tr>
						</xsl:if>
					</xsl:for-each>					
					<xsl:if
						test="//n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount/@currencyID != 'TRL' and //n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount/@currencyID != 'TRY'">
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" align="right" width="200px">
								<span style="font-weight:bold; ">
									<xsl:text>Mal Hizmet Toplam Tutarı(TL)</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:81px; " align="right">
								<xsl:value-of
									select="format-number(//n1:Invoice/cac:LegalMonetaryTotal/cbc:LineExtensionAmount * //n1:Invoice/cac:PricingExchangeRate/cbc:CalculationRate, '###.##0,00', 'european')"/>
								<xsl:text> TL</xsl:text>
							</td>
						</tr>
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="200px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Vergiler Dahil Toplam Tutar(TL)</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:value-of
									select="format-number(//n1:Invoice/cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount * //n1:Invoice/cac:PricingExchangeRate/cbc:CalculationRate, '###.##0,00', 'european')"/>
								<xsl:text> TL</xsl:text>
							</td>
						</tr>
						<tr align="right">
							<td/>
							<td class="lineTableBudgetTd" width="200px" align="right">
								<span style="font-weight:bold; ">
									<xsl:text>Ödenecek Tutar(TL)</xsl:text>
								</span>
							</td>
							<td class="lineTableBudgetTd" style="width:82px; " align="right">
								<xsl:value-of
									select="format-number(//n1:Invoice/cac:LegalMonetaryTotal/cbc:PayableAmount * //n1:Invoice/cac:PricingExchangeRate/cbc:CalculationRate, '###.##0,00', 'european')"/>
								<xsl:text> TL</xsl:text>
							</td>
						</tr>
					</xsl:if>
				</table>
				<br/>
				<xsl:if test="//n1:Invoice/cac:BillingReference/cac:InvoiceDocumentReference/cbc:DocumentTypeCode[text()='İADE' or text()='IADE']">
					<table id="lineTable" width="800">
						<thead>
							<tr>
								<td align="left"><span style="font-weight:bold; " align="center">&#160;&#160;&#160;&#160;&#160;İadeye Konu Olan Faturalar</span></td>							
							</tr>
						</thead>					
						<tbody>
							<tr align="left" class="lineTableTr">							
								<td class="lineTableTd">
									<span style="font-weight:bold; " align="center">&#160;&#160;&#160;&#160;&#160;Fatura No</span>
								</td>
								<td class="lineTableTd"><span style="font-weight:bold; " align="center">&#160;&#160;&#160;&#160;&#160;Tarih</span></td>
							</tr>
							<xsl:for-each select="//n1:Invoice/cac:BillingReference/cac:InvoiceDocumentReference/cbc:DocumentTypeCode[text()='İADE' or text()='IADE']">
								<tr align="left" class="lineTableTr">
									<td class="lineTableTd">&#160;&#160;&#160;&#160;&#160;
										<xsl:value-of select="../cbc:ID"/> 
									</td>
									<td class="lineTableTd">&#160;&#160;&#160;&#160;&#160;
										<xsl:for-each select="../cbc:IssueDate">
											<xsl:apply-templates select="."/>
										</xsl:for-each> 
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</xsl:if>
				<br/>
				<xsl:if	test="//n1:Invoice/cac:BillingReference/cac:AdditionalDocumentReference/cbc:DocumentTypeCode='OKCBF'">
					<table border="1" id="lineTable" width="800">
						<thead>
							<tr>
								<th colspan="6">ÖKC Bilgileri</th>
							</tr>
						</thead>							
						<tbody>
							<tr id="okcbfHeadTr" style="font-weight:bold;">
								<td style="width:20%">
									<xsl:text>Fiş Numarası</xsl:text>
								</td>
								<td style="width:10%" align="center">
									<xsl:text>Fiş Tarihi</xsl:text>
								</td>
								<td style="width:10%" align="center">
									<xsl:text>Fiş Saati</xsl:text>
								</td>
								<td style="width:40%" align="center">
									<xsl:text>Fiş Tipi</xsl:text>
								</td>
								<td style="width:10%" align="center">
									<xsl:text>Z Rapor No</xsl:text>
								</td>
								<td style="width:10%" align="center">
									<xsl:text>ÖKC Seri No</xsl:text>
								</td>
							</tr>						
						</tbody>
						<xsl:for-each select="//n1:Invoice/cac:BillingReference/cac:AdditionalDocumentReference/cbc:DocumentTypeCode[text()='OKCBF']">
							<tr>
								<td style="width:20%">
									<xsl:value-of select="../cbc:ID"/>
								</td>
								<td style="width:10%" align="center">
									<xsl:value-of select="../cbc:IssueDate"/>
								</td>
								<td style="width:10%" align="center">
									<xsl:value-of select="substring(../cac:ValidityPeriod/cbc:StartTime,1,5)"/>
								</td>
								<td style="width:40%" align="center">
									<xsl:choose>
										<xsl:when test="../cbc:DocumentDescription='AVANS'">
											<xsl:text>Ön Tahsilat(Avans) Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='YEMEK_FIS'">
											<xsl:text>Yemek Fişi/Kartı ile Yapılan Tahsilat Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='E-FATURA'">
											<xsl:text>E-Fatura Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='E-FATURA_IRSALIYE'">
											<xsl:text>İrsaliye Yerine Geçen E-Fatura Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='E-ARSIV'">
											<xsl:text>E-Arşiv Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='E-ARSIV_IRSALIYE'">
											<xsl:text>İrsaliye Yerine Geçen E-Arşiv Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='FATURA'">
											<xsl:text>Faturalı Satış Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='OTOPARK'">
											<xsl:text>Otopark Giriş Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='FATURA_TAHSILAT'">
											<xsl:text>Fatura Tahsilat Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:when test="../cbc:DocumentDescription='FATURA_TAHSILAT_KOMISYONLU'">
											<xsl:text>Komisyonlu Fatura Tahsilat Bilgi Fişi</xsl:text>
										</xsl:when>
										<xsl:otherwise>
											<xsl:text> </xsl:text>
										</xsl:otherwise>
									</xsl:choose>
								</td>
								<td style="width:10%" align="center">
									<xsl:value-of select="../cac:Attachment/cac:ExternalReference/cbc:URI"/>
								</td>
								<td style="width:10%" align="center">
									<xsl:value-of select="../cac:IssuerParty/cbc:EndpointID"/>
								</td>
							</tr>													
						</xsl:for-each>
					</table>
					<br/>
				</xsl:if>				
				<table id="notesTable" width="800" align="left">
					<tbody>
						<tr align="left">
							<td id="notesTableTd" height="100">
								<xsl:for-each select="//n1:Invoice/cac:TaxTotal/cac:TaxSubtotal">
									<xsl:if	test="(cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode='0015' or ../../cbc:InvoiceTypeCode='OZELMATRAH') and cac:TaxCategory/cbc:TaxExemptionReason">									
										<b>&#160;&#160;&#160;&#160;&#160; Vergi İstisna Muafiyet Sebebi: </b>
										<xsl:value-of select="cac:TaxCategory/cbc:TaxExemptionReasonCode"/>
										<xsl:text>-</xsl:text>
										<xsl:value-of select="cac:TaxCategory/cbc:TaxExemptionReason"/>
										<br/>
									</xsl:if>
									<xsl:if	test="starts-with(cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode,'007') and cac:TaxCategory/cbc:TaxExemptionReason">									
										<b>&#160;&#160;&#160;&#160;&#160; ÖTV İstisna Muafiyet Sebebi: </b>
										<xsl:value-of select="cac:TaxCategory/cbc:TaxExemptionReasonCode"/>
										<xsl:text>-</xsl:text>
										<xsl:value-of select="cac:TaxCategory/cbc:TaxExemptionReason"/>
										<br/>
									</xsl:if>
								</xsl:for-each>
								<xsl:for-each select="//n1:Invoice/cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme">
									<b>&#160;&#160;&#160;&#160;&#160; Tevkifat Sebebi: </b>
									<xsl:value-of select="cbc:TaxTypeCode"/>
									<xsl:text>-</xsl:text>
									<xsl:value-of select="cbc:Name"/>
									<br/>
								</xsl:for-each>
								<xsl:for-each select="//n1:Invoice/cbc:Note">
									<b>&#160;&#160;&#160;&#160;&#160; Not: </b>
									<xsl:value-of select="."/>	
									<br/>
								</xsl:for-each>									
								<xsl:if test="//n1:Invoice/cac:PaymentMeans/cbc:InstructionNote">
									<b>&#160;&#160;&#160;&#160;&#160; Ödeme Notu: </b>
									<xsl:value-of
										select="//n1:Invoice/cac:PaymentMeans/cbc:InstructionNote"/>
									<br/>
								</xsl:if>
								<xsl:if
									test="//n1:Invoice/cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:PaymentNote">
									<b>&#160;&#160;&#160;&#160;&#160; Hesap Açıklaması: </b>
									<xsl:value-of
										select="//n1:Invoice/cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:PaymentNote"/>
									<br/>
								</xsl:if>
								<xsl:if test="//n1:Invoice/cac:PaymentTerms/cbc:Note">
									<b>&#160;&#160;&#160;&#160;&#160; Ödeme Koşulu: </b>
									<xsl:value-of select="//n1:Invoice/cac:PaymentTerms/cbc:Note"/>
									<br/>
								</xsl:if>
								<xsl:if test="//n1:Invoice/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID[@schemeID='PARTYTYPE']='TAXFREE' and //n1:Invoice/cac:TaxRepresentativeParty/cac:PartyTaxScheme/cbc:ExemptionReasonCode">
									<br/>
									<b>&#160;&#160;&#160;&#160;&#160; VAT OFF - NO CASH REFUND </b>
								</xsl:if>
								
								
								<!--|BANKA BİLGİSİ|-->
								<!--<hr/>
								<table id="hesapBilgileri" width="800px">
									<tbody>
										<tr>
											<td>
												<fieldset style="border:1px solid black;">
													<legend align="center" style="background-color:white; border-width:10px;">
														<b>BANKA HESAP BİLGİLERİ</b>
													</legend>
													<table width="100%" border="1">
														<tr>
															<td style="font-weight:bold;">BANKA </td>
															<td style="font-weight:bold;">ŞUBE </td>
															<td style="font-weight:bold;">IBAN </td>
														</tr>
														<tr>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</fieldset>
											</td>
										</tr>
									</tbody>
								</table>-->
								<!--|*BANKA BİLGİSİ SON*|-->
							</td>
						</tr>
					</tbody>
				</table>
				
				<table id="notesTable2" style="margin-top:2px; !important" width="800" align="left"  >
					<tr>
						<td style="color:#5a85a9" align="middle" >Bu Fatura E-Dönüşüm Merkezi EDM Teknolojileri ile Üretilmiştir</td>
					</tr>
				</table>
				
			</body>
		</html>
	</xsl:template>
	<xsl:template match="//n1:Invoice/cac:InvoiceLine">
		<tr class="lineTableTr">
			<td class="lineTableTd">
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of select="./cbc:ID"/>
			</td>
			<td class="lineTableTd">
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of select="./cac:Item/cbc:Name"/>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of
					select="format-number(./cbc:InvoicedQuantity, '###.###,####', 'european')"/>
				<xsl:if test="./cbc:InvoicedQuantity/@unitCode">
					<xsl:for-each select="./cbc:InvoicedQuantity">
						<xsl:text> </xsl:text>
						<xsl:choose>
							<xsl:when test="@unitCode  = 'TNE'">
								<xsl:text>ton</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'BX'">
								<xsl:text>Kutu</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'LTR'">
								<xsl:text>lt</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'C62'">
								<xsl:text>Adet</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'KGM'">
								<xsl:text>kg</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'KJO'">
								<xsl:text>kJ</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'GRM'">
								<xsl:text>g</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MGM'">
								<xsl:text>mg</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'NT'">
								<xsl:text>Net Ton</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'GT'">
								<xsl:text>Gross Ton</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MTR'">
								<xsl:text>m</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MMT'">
								<xsl:text>mm</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'KTM'">
								<xsl:text>km</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MLT'">
								<xsl:text>ml</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MMQ'">
								<xsl:text>mm3</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'CLT'">
								<xsl:text>cl</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'CMK'">
								<xsl:text>cm2</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'CMQ'">
								<xsl:text>cm3</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'CMT'">
								<xsl:text>cm</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MTK'">
								<xsl:text>m2</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MTQ'">
								<xsl:text>m3</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'DAY'">
								<xsl:text> Gün</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'MON'">
								<xsl:text> Ay</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'PA'">
								<xsl:text> Paket</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'KWH'">
								<xsl:text> KWH</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'ANN'">
								<xsl:text> Yıl</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'HUR'">
								<xsl:text> Saat</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'D61'">
								<xsl:text> Dakika</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'D62'">
								<xsl:text> Saniye</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'CCT'">
								<xsl:text> Ton baş.taşıma kap.</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'D30'">
								<xsl:text> Brüt kalori</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'D40'">
								<xsl:text> 1000 lt</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'LPA'">
								<xsl:text> saf alkol lt</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'B32'">
								<xsl:text> kg.m2</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'NCL'">
								<xsl:text> hücre adet</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'PR'">
								<xsl:text> Çift</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'R9'">
								<xsl:text> 1000 m3</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'SET'">
								<xsl:text> Set</xsl:text>
							</xsl:when>
							<xsl:when test="@unitCode  = 'T3'">
								<xsl:text> 1000 adet</xsl:text>
							</xsl:when>		
							<xsl:when test="@unitCode = '5B'">
							<xsl:text>Takım</xsl:text>
							</xsl:when>							
						</xsl:choose>
					</xsl:for-each>
				</xsl:if>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:value-of
					select="format-number(./cac:Price/cbc:PriceAmount, '###.##0,########', 'european')"/>
				<xsl:if test="./cac:Price/cbc:PriceAmount/@currencyID">
					<xsl:text> </xsl:text>
					<xsl:if test="./cac:Price/cbc:PriceAmount/@currencyID = &quot;TRL&quot; or ./cac:Price/cbc:PriceAmount/@currencyID = &quot;TRY&quot;">
						<xsl:text>TL</xsl:text>
					</xsl:if>
					<xsl:if test="./cac:Price/cbc:PriceAmount/@currencyID != &quot;TRL&quot; and ./cac:Price/cbc:PriceAmount/@currencyID != &quot;TRY&quot;">
						<xsl:value-of select="./cac:Price/cbc:PriceAmount/@currencyID"/>
					</xsl:if>
				</xsl:if>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each select="./cac:AllowanceCharge/cbc:MultiplierFactorNumeric">
					<xsl:text> %</xsl:text>
					<xsl:value-of select="format-number(. * 100, '###.##0,00', 'european')"/>
				</xsl:for-each>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each select="cac:AllowanceCharge/cbc:Amount">
					<xsl:call-template name="Curr_Type"/>
				</xsl:for-each>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each select="./cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme">
					<xsl:if test="cbc:TaxTypeCode='0015' ">
						<xsl:text> </xsl:text>
						<xsl:if test="../../cbc:Percent">
							<xsl:text> %</xsl:text>
							<xsl:value-of select="format-number(../../cbc:Percent, '###.##0,00', 'european')"/>
						</xsl:if>
					</xsl:if>
				</xsl:for-each>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each
					select="./cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme">
					<xsl:if test="cbc:TaxTypeCode='0015' ">
						<xsl:text> </xsl:text>
						<xsl:for-each select="../../cbc:TaxAmount">
							<xsl:call-template name="Curr_Type"/>
						</xsl:for-each>
					</xsl:if>
				</xsl:for-each>
			</td>
			<td class="lineTableTd" style="font-size: xx-small" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each
					select="./cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme">
					<xsl:if test="cbc:TaxTypeCode!='0015' ">
						<xsl:text> </xsl:text>
						<xsl:value-of select="cbc:Name"/>
						<xsl:if test="../../cbc:Percent">
							<xsl:text> (%</xsl:text>
							<xsl:value-of
								select="format-number(../../cbc:Percent, '###.##0,00', 'european')"/>
							<xsl:text>)=</xsl:text>
						</xsl:if>					
						<xsl:for-each select="../../cbc:TaxAmount">
							<xsl:call-template name="Curr_Type"/>
						</xsl:for-each>
					</xsl:if>
				</xsl:for-each>
				<xsl:for-each
					select="./cac:WithholdingTaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme">
					<xsl:text>KDV TEVKİFAT </xsl:text>
					<xsl:if test="../../cbc:Percent">
						<xsl:text> (%</xsl:text>
						<xsl:value-of
							select="format-number(../../cbc:Percent, '###.##0,00', 'european')"/>
						<xsl:text>)=</xsl:text>
					</xsl:if>
					<xsl:for-each select="../../cbc:TaxAmount">
						<xsl:call-template name="Curr_Type"/>
						<xsl:text>&#10;</xsl:text>
					</xsl:for-each>
				</xsl:for-each>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
				<xsl:for-each select="cbc:LineExtensionAmount">
					<xsl:call-template name="Curr_Type"/>
				</xsl:for-each>
			</td>
			<xsl:if test="//n1:Invoice/cbc:ProfileID='IHRACAT'">
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:DeliveryTerms/cbc:ID[@schemeID='INCOTERMS']">
						<xsl:text>&#160;</xsl:text>
						<xsl:apply-templates/>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:Shipment/cac:TransportHandlingUnit/cac:ActualPackage/cbc:PackagingTypeCode">
						<xsl:text>&#160;</xsl:text>
						<xsl:call-template name="Packaging">
							<xsl:with-param name="PackagingType">
								<xsl:value-of select="."/>
							</xsl:with-param>
						</xsl:call-template>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:Shipment/cac:TransportHandlingUnit/cac:ActualPackage/cbc:ID">
						<xsl:text>&#160;</xsl:text>
						<xsl:apply-templates/>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:Shipment/cac:TransportHandlingUnit/cac:ActualPackage/cbc:Quantity">
						<xsl:text>&#160;</xsl:text>
						<xsl:apply-templates/>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:DeliveryAddress">
						<xsl:text>&#160;</xsl:text>
						<xsl:apply-templates/>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:Shipment/cac:ShipmentStage/cbc:TransportModeCode">
						<xsl:text>&#160;</xsl:text>
						<xsl:call-template name="TransportMode">
							<xsl:with-param name="TransportModeType">
								<xsl:value-of select="."/>
							</xsl:with-param>
						</xsl:call-template>
					</xsl:for-each>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
					<xsl:for-each select="cac:Delivery/cac:Shipment/cac:GoodsItem/cbc:RequiredCustomsID">
						<xsl:text>&#160;</xsl:text>
						<xsl:apply-templates/>
					</xsl:for-each>
				</td>				
			</xsl:if>			
		</tr>
	</xsl:template>
	<xsl:template match="//cbc:IssueDate">
		<xsl:value-of select="substring(.,9,2)"/>-<xsl:value-of select="substring(.,6,2)"/>-<xsl:value-of select="substring(.,1,4)"/>
	</xsl:template>
	<xsl:template match="//n1:Invoice">
		<tr class="lineTableTr">
			<td class="lineTableTd">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<td class="lineTableTd" align="right">
				<xsl:text>&#160;</xsl:text>
			</td>
			<xsl:if test="//n1:Invoice/cbc:ProfileID='IHRACAT'">
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
				<td class="lineTableTd" align="right">
					<xsl:text>&#160;</xsl:text>
				</td>
			</xsl:if>			
		</tr>
	</xsl:template>
	<xsl:template name="Party_Title" >
		<xsl:param name="PartyType" />
		<td style="width:469px; " align="left">
			<xsl:if test="cac:PartyName">
				<xsl:value-of select="cac:PartyName/cbc:Name"/>
				<br/>
			</xsl:if>
			<xsl:for-each select="cac:Person">
				<xsl:for-each select="cbc:Title">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:FirstName">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:MiddleName">
					<xsl:apply-templates/>
					<xsl:text>&#160; </xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:FamilyName">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:NameSuffix">
					<xsl:apply-templates/>
				</xsl:for-each>
				<xsl:if test="$PartyType='TAXFREE'">
					<br/>
					<xsl:text>Pasaport No: </xsl:text>
					<xsl:value-of select="cac:IdentityDocumentReference/cbc:ID"/>
					<br/>
					<xsl:text>Ülkesi: </xsl:text>
					<xsl:for-each select="cbc:NationalityID">
						<xsl:call-template name="Country">
							<xsl:with-param name="CountryType"><xsl:value-of select="."/></xsl:with-param>
						</xsl:call-template>
					</xsl:for-each>
				</xsl:if>
			</xsl:for-each>
		</td>		
	</xsl:template>
	<xsl:template name="Party_Adress" >
		<xsl:param name="PartyType" />
		<td style="width:469px; " align="left">
			<xsl:for-each select="cac:PostalAddress">
				<xsl:for-each select="cbc:StreetName">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:BuildingName">
					<xsl:apply-templates/>
				</xsl:for-each>
				<xsl:for-each select="cbc:BuildingNumber">
					<xsl:text> No:</xsl:text>
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<br/>
				<xsl:for-each select="cbc:Room">
					<xsl:text>Kapı No:</xsl:text>
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<br/>
				<xsl:for-each select="cbc:PostalZone">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:CitySubdivisionName">
					<xsl:apply-templates/>
					<xsl:text>/ </xsl:text>
				</xsl:for-each>
				<xsl:for-each select="cbc:CityName">
					<xsl:apply-templates/>
					<xsl:text>&#160;</xsl:text>
				</xsl:for-each>
				<xsl:if test="$PartyType!='OTHER'">
					<br/>
					<xsl:value-of select="cac:Country/cbc:Name"/>
					<br/>
				</xsl:if>
			</xsl:for-each>
		</td>
	</xsl:template>
	<xsl:template name="TransportMode">
		<xsl:param name="TransportModeType" />
		<xsl:choose>
			<xsl:when test="$TransportModeType=1">Denizyolu</xsl:when>
			<xsl:when test="$TransportModeType=2">Demiryolu</xsl:when>
			<xsl:when test="$TransportModeType=3">Karayolu</xsl:when>
			<xsl:when test="$TransportModeType=4">Havayolu</xsl:when>
			<xsl:when test="$TransportModeType=5">Posta</xsl:when>
			<xsl:when test="$TransportModeType=6">Çok araçlı</xsl:when>
			<xsl:when test="$TransportModeType=7">Sabit taşıma tesisleri</xsl:when>
			<xsl:when test="$TransportModeType=8">İç su taşımacılığı</xsl:when>			
			<xsl:otherwise><xsl:value-of select="$TransportModeType"/></xsl:otherwise>
		</xsl:choose>		
	</xsl:template>
	<xsl:template name="Packaging">
		<xsl:param name="PackagingType" />
		<xsl:choose>
			<xsl:when test="$PackagingType='1A'">Drum, steel</xsl:when>
			<xsl:when test="$PackagingType='1B'">Drum, aluminium</xsl:when>
			<xsl:when test="$PackagingType='1D'">Drum, plywood</xsl:when>
			<xsl:when test="$PackagingType='1F'">Container, flexible</xsl:when>
			<xsl:when test="$PackagingType='1G'">Drum, fibre</xsl:when>
			<xsl:when test="$PackagingType='1W'">Drum, wooden</xsl:when>
			<xsl:when test="$PackagingType='2C'">Barrel, wooden</xsl:when>
			<xsl:when test="$PackagingType='3A'">Jerrican, steel</xsl:when>
			<xsl:when test="$PackagingType='3H'">Jerrican, plastic</xsl:when>
			<xsl:when test="$PackagingType='43'">Bag, super bulk</xsl:when>
			<xsl:when test="$PackagingType='44'">Bag, polybag</xsl:when>
			<xsl:when test="$PackagingType='4A'">Box, steel</xsl:when>
			<xsl:when test="$PackagingType='4B'">Box, aluminium</xsl:when>
			<xsl:when test="$PackagingType='4C'">Box, natural wood</xsl:when>
			<xsl:when test="$PackagingType='4D'">Box, plywood</xsl:when>
			<xsl:when test="$PackagingType='4F'">Box, reconstituted wood</xsl:when>
			<xsl:when test="$PackagingType='4G'">Box, fibreboard</xsl:when>
			<xsl:when test="$PackagingType='4H'">Box, plastic</xsl:when>
			<xsl:when test="$PackagingType='5H'">Bag, woven plastic</xsl:when>
			<xsl:when test="$PackagingType='5L'">Bag, textile</xsl:when>
			<xsl:when test="$PackagingType='5M'">Bag, paper</xsl:when>
			<xsl:when test="$PackagingType='6H'">Composite packaging, plastic receptacle</xsl:when>
			<xsl:when test="$PackagingType='6P'">Composite packaging, glass receptacle</xsl:when>
			<xsl:when test="$PackagingType='7A'">Case, car</xsl:when>
			<xsl:when test="$PackagingType='7B'">Case, wooden</xsl:when>
			<xsl:when test="$PackagingType='8A'">Pallet, wooden</xsl:when>
			<xsl:when test="$PackagingType='8B'">Crate, wooden</xsl:when>
			<xsl:when test="$PackagingType='8C'">Bundle, wooden</xsl:when>
			<xsl:when test="$PackagingType='AA'">Intermediate bulk container, rigid plastic</xsl:when>
			<xsl:when test="$PackagingType='AB'">Receptacle, fibre</xsl:when>
			<xsl:when test="$PackagingType='AC'">Receptacle, paper</xsl:when>
			<xsl:when test="$PackagingType='AD'">Receptacle, wooden</xsl:when>
			<xsl:when test="$PackagingType='AE'">Aerosol</xsl:when>
			<xsl:when test="$PackagingType='AF'">Pallet, modular, collars 80cms * 60cms</xsl:when>
			<xsl:when test="$PackagingType='AG'">Pallet, shrinkwrapped</xsl:when>
			<xsl:when test="$PackagingType='AH'">Pallet, 100cms * 110cms</xsl:when>
			<xsl:when test="$PackagingType='AI'">Clamshell</xsl:when>
			<xsl:when test="$PackagingType='AJ'">Cone</xsl:when>
			<xsl:when test="$PackagingType='AL'">Ball</xsl:when>
			<xsl:when test="$PackagingType='AM'">Ampoule, non-protected</xsl:when>
			<xsl:when test="$PackagingType='AP'">Ampoule, protected</xsl:when>
			<xsl:when test="$PackagingType='AT'">Atomizer</xsl:when>
			<xsl:when test="$PackagingType='AV'">Capsule</xsl:when>
			<xsl:when test="$PackagingType='B4'">Belt</xsl:when>
			<xsl:when test="$PackagingType='BA'">Barrel</xsl:when>
			<xsl:when test="$PackagingType='BB'">Bobbin</xsl:when>
			<xsl:when test="$PackagingType='BC'">Bottlecrate / bottlerack</xsl:when>
			<xsl:when test="$PackagingType='BD'">Board</xsl:when>
			<xsl:when test="$PackagingType='BE'">Bundle</xsl:when>
			<xsl:when test="$PackagingType='BF'">Balloon, non-protected</xsl:when>
			<xsl:when test="$PackagingType='BG'">Bag</xsl:when>
			<xsl:when test="$PackagingType='BH'">Bunch</xsl:when>
			<xsl:when test="$PackagingType='BI'">Bin</xsl:when>
			<xsl:when test="$PackagingType='BJ'">Bucket</xsl:when>
			<xsl:when test="$PackagingType='BK'">Basket</xsl:when>
			<xsl:when test="$PackagingType='BL'">Bale, compressed</xsl:when>
			<xsl:when test="$PackagingType='BM'">Basin</xsl:when>
			<xsl:when test="$PackagingType='BN'">Bale, non-compressed</xsl:when>
			<xsl:when test="$PackagingType='BO'">Bottle, non-protected, cylindrical</xsl:when>
			<xsl:when test="$PackagingType='BP'">Balloon, protected</xsl:when>
			<xsl:when test="$PackagingType='BQ'">Bottle, protected cylindrical</xsl:when>
			<xsl:when test="$PackagingType='BR'">Bar</xsl:when>
			<xsl:when test="$PackagingType='BS'">Bottle, non-protected, bulbous</xsl:when>
			<xsl:when test="$PackagingType='BT'">Bolt</xsl:when>
			<xsl:when test="$PackagingType='BU'">Butt</xsl:when>
			<xsl:when test="$PackagingType='BV'">Bottle, protected bulbous</xsl:when>
			<xsl:when test="$PackagingType='BW'">Box, for liquids</xsl:when>
			<xsl:when test="$PackagingType='BX'">Box</xsl:when>
			<xsl:when test="$PackagingType='BY'">Board, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='BZ'">Bars, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='CA'">Can, rectangular</xsl:when>
			<xsl:when test="$PackagingType='CB'">Crate, beer</xsl:when>
			<xsl:when test="$PackagingType='CC'">Churn</xsl:when>
			<xsl:when test="$PackagingType='CD'">Can, with handle and spout</xsl:when>
			<xsl:when test="$PackagingType='CE'">Creel</xsl:when>
			<xsl:when test="$PackagingType='CF'">Coffer</xsl:when>
			<xsl:when test="$PackagingType='CG'">Cage</xsl:when>
			<xsl:when test="$PackagingType='CH'">Chest</xsl:when>
			<xsl:when test="$PackagingType='CI'">Canister</xsl:when>
			<xsl:when test="$PackagingType='CJ'">Coffin</xsl:when>
			<xsl:when test="$PackagingType='CK'">Cask</xsl:when>
			<xsl:when test="$PackagingType='CL'">Coil</xsl:when>
			<xsl:when test="$PackagingType='CM'">Card</xsl:when>
			<xsl:when test="$PackagingType='CN'">Container, not otherwise specified as transport equipment</xsl:when>
			<xsl:when test="$PackagingType='CO'">Carboy, non-protected</xsl:when>
			<xsl:when test="$PackagingType='CP'">Carboy, protected</xsl:when>
			<xsl:when test="$PackagingType='CQ'">Cartridge</xsl:when>
			<xsl:when test="$PackagingType='CR'">Crate</xsl:when>
			<xsl:when test="$PackagingType='CS'">Case</xsl:when>
			<xsl:when test="$PackagingType='CT'">Carton</xsl:when>
			<xsl:when test="$PackagingType='CU'">Cup</xsl:when>
			<xsl:when test="$PackagingType='CV'">Cover</xsl:when>
			<xsl:when test="$PackagingType='CW'">Cage, roll</xsl:when>
			<xsl:when test="$PackagingType='CX'">Can, cylindrical</xsl:when>
			<xsl:when test="$PackagingType='CY'">Cylinder</xsl:when>
			<xsl:when test="$PackagingType='CZ'">Canvas</xsl:when>
			<xsl:when test="$PackagingType='DA'">Crate, multiple layer, plastic</xsl:when>
			<xsl:when test="$PackagingType='DB'">Crate, multiple layer, wooden</xsl:when>
			<xsl:when test="$PackagingType='DC'">Crate, multiple layer, cardboard</xsl:when>
			<xsl:when test="$PackagingType='DG'">Cage, Commonwealth Handling Equipment Pool (CHEP)</xsl:when>
			<xsl:when test="$PackagingType='DH'">Box, Commonwealth Handling Equipment Pool (CHEP), Eurobox</xsl:when>
			<xsl:when test="$PackagingType='DI'">Drum, iron</xsl:when>
			<xsl:when test="$PackagingType='DJ'">Demijohn, non-protected</xsl:when>
			<xsl:when test="$PackagingType='DK'">Crate, bulk, cardboard</xsl:when>
			<xsl:when test="$PackagingType='DL'">Crate, bulk, plastic</xsl:when>
			<xsl:when test="$PackagingType='DM'">Crate, bulk, wooden</xsl:when>
			<xsl:when test="$PackagingType='DN'">Dispenser</xsl:when>
			<xsl:when test="$PackagingType='DP'">Demijohn, protected</xsl:when>
			<xsl:when test="$PackagingType='DR'">Drum</xsl:when>
			<xsl:when test="$PackagingType='DS'">Tray, one layer no cover, plastic</xsl:when>
			<xsl:when test="$PackagingType='DT'">Tray, one layer no cover, wooden</xsl:when>
			<xsl:when test="$PackagingType='DU'">Tray, one layer no cover, polystyrene</xsl:when>
			<xsl:when test="$PackagingType='DV'">Tray, one layer no cover, cardboard</xsl:when>
			<xsl:when test="$PackagingType='DW'">Tray, two layers no cover, plastic tray</xsl:when>
			<xsl:when test="$PackagingType='DX'">Tray, two layers no cover, wooden</xsl:when>
			<xsl:when test="$PackagingType='DY'">Tray, two layers no cover, cardboard</xsl:when>
			<xsl:when test="$PackagingType='EC'">Bag, plastic</xsl:when>
			<xsl:when test="$PackagingType='ED'">Case, with pallet base</xsl:when>
			<xsl:when test="$PackagingType='EE'">Case, with pallet base, wooden</xsl:when>
			<xsl:when test="$PackagingType='EF'">Case, with pallet base, cardboard</xsl:when>
			<xsl:when test="$PackagingType='EG'">Case, with pallet base, plastic</xsl:when>
			<xsl:when test="$PackagingType='EH'">Case, with pallet base, metal</xsl:when>
			<xsl:when test="$PackagingType='EI'">Case, isothermic</xsl:when>
			<xsl:when test="$PackagingType='EN'">Envelope</xsl:when>
			<xsl:when test="$PackagingType='FB'">Flexibag</xsl:when>
			<xsl:when test="$PackagingType='FC'">Crate, fruit</xsl:when>
			<xsl:when test="$PackagingType='FD'">Crate, framed</xsl:when>
			<xsl:when test="$PackagingType='FE'">Flexitank</xsl:when>
			<xsl:when test="$PackagingType='FI'">Firkin</xsl:when>
			<xsl:when test="$PackagingType='FL'">Flask</xsl:when>
			<xsl:when test="$PackagingType='FO'">Footlocker</xsl:when>
			<xsl:when test="$PackagingType='FP'">Filmpack</xsl:when>
			<xsl:when test="$PackagingType='FR'">Frame</xsl:when>
			<xsl:when test="$PackagingType='FT'">Foodtainer</xsl:when>
			<xsl:when test="$PackagingType='FW'">Cart, flatbed</xsl:when>
			<xsl:when test="$PackagingType='FX'">Bag, flexible container</xsl:when>
			<xsl:when test="$PackagingType='GB'">Bottle, gas</xsl:when>
			<xsl:when test="$PackagingType='GI'">Girder</xsl:when>
			<xsl:when test="$PackagingType='GL'">Container, gallon</xsl:when>
			<xsl:when test="$PackagingType='GR'">Receptacle, glass</xsl:when>
			<xsl:when test="$PackagingType='GU'">Tray, containing horizontally stacked flat items</xsl:when>
			<xsl:when test="$PackagingType='GY'">Bag, gunny</xsl:when>
			<xsl:when test="$PackagingType='GZ'">Girders, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='HA'">Basket, with handle, plastic</xsl:when>
			<xsl:when test="$PackagingType='HB'">Basket, with handle, wooden</xsl:when>
			<xsl:when test="$PackagingType='HC'">Basket, with handle, cardboard</xsl:when>
			<xsl:when test="$PackagingType='HG'">Hogshead</xsl:when>
			<xsl:when test="$PackagingType='HN'">Hanger</xsl:when>
			<xsl:when test="$PackagingType='HR'">Hamper</xsl:when>
			<xsl:when test="$PackagingType='IA'">Package, display, wooden</xsl:when>
			<xsl:when test="$PackagingType='IB'">Package, display, cardboard</xsl:when>
			<xsl:when test="$PackagingType='IC'">Package, display, plastic</xsl:when>
			<xsl:when test="$PackagingType='ID'">Package, display, metal</xsl:when>
			<xsl:when test="$PackagingType='IE'">Package, show</xsl:when>
			<xsl:when test="$PackagingType='IF'">Package, flow</xsl:when>
			<xsl:when test="$PackagingType='IG'">Package, paper wrapped</xsl:when>
			<xsl:when test="$PackagingType='IH'">Drum, plastic</xsl:when>
			<xsl:when test="$PackagingType='IK'">Package, cardboard, with bottle grip-holes</xsl:when>
			<xsl:when test="$PackagingType='IL'">Tray, rigid, lidded stackable (CEN TS 14482:2002)</xsl:when>
			<xsl:when test="$PackagingType='IN'">Ingot</xsl:when>
			<xsl:when test="$PackagingType='IZ'">Ingots, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='JB'">Bag, jumbo</xsl:when>
			<xsl:when test="$PackagingType='JC'">Jerrican, rectangular</xsl:when>
			<xsl:when test="$PackagingType='JG'">Jug</xsl:when>
			<xsl:when test="$PackagingType='JR'">Jar</xsl:when>
			<xsl:when test="$PackagingType='JT'">Jutebag</xsl:when>
			<xsl:when test="$PackagingType='JY'">Jerrican, cylindrical</xsl:when>
			<xsl:when test="$PackagingType='KG'">Keg</xsl:when>
			<xsl:when test="$PackagingType='KI'">Kit</xsl:when>
			<xsl:when test="$PackagingType='LE'">Luggage</xsl:when>
			<xsl:when test="$PackagingType='LG'">Log</xsl:when>
			<xsl:when test="$PackagingType='LT'">Lot</xsl:when>
			<xsl:when test="$PackagingType='LU'">Lug</xsl:when>
			<xsl:when test="$PackagingType='LV'">Liftvan</xsl:when>
			<xsl:when test="$PackagingType='LZ'">Logs, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='MA'">Crate, metal</xsl:when>
			<xsl:when test="$PackagingType='MB'">Bag, multiply</xsl:when>
			<xsl:when test="$PackagingType='MC'">Crate, milk</xsl:when>
			<xsl:when test="$PackagingType='ME'">Container, metal</xsl:when>
			<xsl:when test="$PackagingType='MR'">Receptacle, metal</xsl:when>
			<xsl:when test="$PackagingType='MS'">Sack, multi-wall</xsl:when>
			<xsl:when test="$PackagingType='MT'">Mat</xsl:when>
			<xsl:when test="$PackagingType='MW'">Receptacle, plastic wrapped</xsl:when>
			<xsl:when test="$PackagingType='MX'">Matchbox</xsl:when>
			<xsl:when test="$PackagingType='NA'">Not available</xsl:when>
			<xsl:when test="$PackagingType='NE'">Unpacked or unpackaged</xsl:when>
			<xsl:when test="$PackagingType='NF'">Unpacked or unpackaged, single unit</xsl:when>
			<xsl:when test="$PackagingType='NG'">Unpacked or unpackaged, multiple units</xsl:when>
			<xsl:when test="$PackagingType='NS'">Nest</xsl:when>
			<xsl:when test="$PackagingType='NT'">Net</xsl:when>
			<xsl:when test="$PackagingType='NU'">Net, tube, plastic</xsl:when>
			<xsl:when test="$PackagingType='NV'">Net, tube, textile</xsl:when>
			<xsl:when test="$PackagingType='OA'">Pallet, CHEP 40 cm x 60 cm</xsl:when>
			<xsl:when test="$PackagingType='OB'">Pallet, CHEP 80 cm x 120 cm</xsl:when>
			<xsl:when test="$PackagingType='OC'">Pallet, CHEP 100 cm x 120 cm</xsl:when>
			<xsl:when test="$PackagingType='OD'">Pallet, AS 4068-1993</xsl:when>
			<xsl:when test="$PackagingType='OE'">Pallet, ISO T11</xsl:when>
			<xsl:when test="$PackagingType='OF'">Platform, unspecified weight or dimension</xsl:when>
			<xsl:when test="$PackagingType='OK'">Block</xsl:when>
			<xsl:when test="$PackagingType='OT'">Octabin</xsl:when>
			<xsl:when test="$PackagingType='OU'">Container, outer</xsl:when>
			<xsl:when test="$PackagingType='P2'">Pan</xsl:when>
			<xsl:when test="$PackagingType='PA'">Packet</xsl:when>
			<xsl:when test="$PackagingType='PB'">Pallet, box Combined open-ended box and pallet</xsl:when>
			<xsl:when test="$PackagingType='PC'">Parcel</xsl:when>
			<xsl:when test="$PackagingType='PD'">Pallet, modular, collars 80cms * 100cms</xsl:when>
			<xsl:when test="$PackagingType='PE'">Pallet, modular, collars 80cms * 120cms</xsl:when>
			<xsl:when test="$PackagingType='PF'">Pen</xsl:when>
			<xsl:when test="$PackagingType='PG'">Plate</xsl:when>
			<xsl:when test="$PackagingType='PH'">Pitcher</xsl:when>
			<xsl:when test="$PackagingType='PI'">Pipe</xsl:when>
			<xsl:when test="$PackagingType='PJ'">Punnet</xsl:when>
			<xsl:when test="$PackagingType='PK'">Package</xsl:when>
			<xsl:when test="$PackagingType='PL'">Pail</xsl:when>
			<xsl:when test="$PackagingType='PN'">Plank</xsl:when>
			<xsl:when test="$PackagingType='PO'">Pouch</xsl:when>
			<xsl:when test="$PackagingType='PP'">Piece</xsl:when>
			<xsl:when test="$PackagingType='PR'">Receptacle, plastic</xsl:when>
			<xsl:when test="$PackagingType='PT'">Pot</xsl:when>
			<xsl:when test="$PackagingType='PU'">Tray</xsl:when>
			<xsl:when test="$PackagingType='PV'">Pipes, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='PX'">Pallet</xsl:when>
			<xsl:when test="$PackagingType='PY'">Plates, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='PZ'">Planks, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='QA'">Drum, steel, non-removable head</xsl:when>
			<xsl:when test="$PackagingType='QB'">Drum, steel, removable head</xsl:when>
			<xsl:when test="$PackagingType='QC'">Drum, aluminium, non-removable head</xsl:when>
			<xsl:when test="$PackagingType='QD'">Drum, aluminium, removable head</xsl:when>
			<xsl:when test="$PackagingType='QF'">Drum, plastic, non-removable head</xsl:when>
			<xsl:when test="$PackagingType='QG'">Drum, plastic, removable head</xsl:when>
			<xsl:when test="$PackagingType='QH'">Barrel, wooden, bung type</xsl:when>
			<xsl:when test="$PackagingType='QJ'">Barrel, wooden, removable head</xsl:when>
			<xsl:when test="$PackagingType='QK'">Jerrican, steel, non-removable head</xsl:when>
			<xsl:when test="$PackagingType='QL'">Jerrican, steel, removable head</xsl:when>
			<xsl:when test="$PackagingType='QM'">Jerrican, plastic, non-removable head</xsl:when>
			<xsl:when test="$PackagingType='QN'">Jerrican, plastic, removable head</xsl:when>
			<xsl:when test="$PackagingType='QP'">Box, wooden, natural wood, ordinary</xsl:when>
			<xsl:when test="$PackagingType='QQ'">Box, wooden, natural wood, with sift proof walls</xsl:when>
			<xsl:when test="$PackagingType='QR'">Box, plastic, expanded</xsl:when>
			<xsl:when test="$PackagingType='QS'">Box, plastic, solid</xsl:when>
			<xsl:when test="$PackagingType='RD'">Rod</xsl:when>
			<xsl:when test="$PackagingType='RG'">Ring</xsl:when>
			<xsl:when test="$PackagingType='RJ'">Rack, clothing hanger</xsl:when>
			<xsl:when test="$PackagingType='RK'">Rack</xsl:when>
			<xsl:when test="$PackagingType='RL'">Reel</xsl:when>
			<xsl:when test="$PackagingType='RO'">Roll</xsl:when>
			<xsl:when test="$PackagingType='RT'">Rednet</xsl:when>
			<xsl:when test="$PackagingType='RZ'">Rods, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='SA'">Sack</xsl:when>
			<xsl:when test="$PackagingType='SB'">Slab</xsl:when>
			<xsl:when test="$PackagingType='SC'">Crate, shallow</xsl:when>
			<xsl:when test="$PackagingType='SD'">Spindle</xsl:when>
			<xsl:when test="$PackagingType='SE'">Sea-chest</xsl:when>
			<xsl:when test="$PackagingType='SH'">Sachet</xsl:when>
			<xsl:when test="$PackagingType='SI'">Skid</xsl:when>
			<xsl:when test="$PackagingType='SK'">Case, skeleton</xsl:when>
			<xsl:when test="$PackagingType='SL'">Slipsheet</xsl:when>
			<xsl:when test="$PackagingType='SM'">Sheetmetal</xsl:when>
			<xsl:when test="$PackagingType='SO'">Spool</xsl:when>
			<xsl:when test="$PackagingType='SP'">Sheet, plastic wrapping</xsl:when>
			<xsl:when test="$PackagingType='SS'">Case, steel</xsl:when>
			<xsl:when test="$PackagingType='ST'">Sheet</xsl:when>
			<xsl:when test="$PackagingType='SU'">Suitcase</xsl:when>
			<xsl:when test="$PackagingType='SV'">Envelope, steel</xsl:when>
			<xsl:when test="$PackagingType='SW'">Shrinkwrapped</xsl:when>
			<xsl:when test="$PackagingType='SX'">Set</xsl:when>
			<xsl:when test="$PackagingType='SY'">Sleeve</xsl:when>
			<xsl:when test="$PackagingType='SZ'">Sheets, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='T1'">Tablet</xsl:when>
			<xsl:when test="$PackagingType='TB'">Tub</xsl:when>
			<xsl:when test="$PackagingType='TC'">Tea-chest</xsl:when>
			<xsl:when test="$PackagingType='TD'">Tube, collapsible</xsl:when>
			<xsl:when test="$PackagingType='TE'">Tyre</xsl:when>
			<xsl:when test="$PackagingType='TG'">Tank container, generic</xsl:when>
			<xsl:when test="$PackagingType='TI'">Tierce</xsl:when>
			<xsl:when test="$PackagingType='TK'">Tank, rectangular</xsl:when>
			<xsl:when test="$PackagingType='TL'">Tub, with lid</xsl:when>
			<xsl:when test="$PackagingType='TN'">Tin</xsl:when>
			<xsl:when test="$PackagingType='TO'">Tun</xsl:when>
			<xsl:when test="$PackagingType='TR'">Trunk</xsl:when>
			<xsl:when test="$PackagingType='TS'">Truss</xsl:when>
			<xsl:when test="$PackagingType='TT'">Bag, tote</xsl:when>
			<xsl:when test="$PackagingType='TU'">Tube</xsl:when>
			<xsl:when test="$PackagingType='TV'">Tube, with nozzle</xsl:when>
			<xsl:when test="$PackagingType='TW'">Pallet, triwall</xsl:when>
			<xsl:when test="$PackagingType='TY'">Tank, cylindrical</xsl:when>
			<xsl:when test="$PackagingType='TZ'">Tubes, in bundle/bunch/truss</xsl:when>
			<xsl:when test="$PackagingType='UC'">Uncaged</xsl:when>
			<xsl:when test="$PackagingType='UN'">Unit</xsl:when>
			<xsl:when test="$PackagingType='VA'">Vat</xsl:when>
			<xsl:when test="$PackagingType='VG'">Bulk, gas (at 1031 mbar and 15Â°C)</xsl:when>
			<xsl:when test="$PackagingType='VI'">Vial</xsl:when>
			<xsl:when test="$PackagingType='VK'">Vanpack</xsl:when>
			<xsl:when test="$PackagingType='VL'">Bulk, liquid</xsl:when>
			<xsl:when test="$PackagingType='VO'">Bulk, solid, large particles (Â“nodulesÂ”)</xsl:when>
			<xsl:when test="$PackagingType='VP'">Vacuum-packed</xsl:when>
			<xsl:when test="$PackagingType='VQ'">Bulk, liquefied gas (at abnormal temperature/pressure)</xsl:when>
			<xsl:when test="$PackagingType='VN'">Vehicle</xsl:when>
			<xsl:when test="$PackagingType='VR'">Bulk, solid, granular particles (Â“grainsÂ”)</xsl:when>
			<xsl:when test="$PackagingType='VS'">Bulk, scrap metal</xsl:when>
			<xsl:when test="$PackagingType='VY'">Bulk, solid, fine particles (Â“powdersÂ”)</xsl:when>
			<xsl:when test="$PackagingType='WA'">Intermediate bulk container</xsl:when>
			<xsl:when test="$PackagingType='WB'">Wickerbottle</xsl:when>
			<xsl:when test="$PackagingType='WC'">Intermediate bulk container, steel</xsl:when>
			<xsl:when test="$PackagingType='WD'">Intermediate bulk container, aluminium</xsl:when>
			<xsl:when test="$PackagingType='WF'">Intermediate bulk container, metal</xsl:when>
			<xsl:when test="$PackagingType='WG'">Intermediate bulk container, steel, pressurised > 10 kpa</xsl:when>
			<xsl:when test="$PackagingType='WH'">Intermediate bulk container, aluminium, pressurised > 10 kpa</xsl:when>
			<xsl:when test="$PackagingType='WJ'">Intermediate bulk container, metal, pressure 10 kpa</xsl:when>
			<xsl:when test="$PackagingType='WK'">Intermediate bulk container, steel, liquid</xsl:when>
			<xsl:when test="$PackagingType='WL'">Intermediate bulk container, aluminium, liquid</xsl:when>
			<xsl:when test="$PackagingType='WM'">Intermediate bulk container, metal, liquid</xsl:when>
			<xsl:when test="$PackagingType='WN'">Intermediate bulk container, woven plastic, without coat/liner</xsl:when>
			<xsl:when test="$PackagingType='WP'">Intermediate bulk container, woven plastic, coated</xsl:when>
			<xsl:when test="$PackagingType='WQ'">Intermediate bulk container, woven plastic, with liner</xsl:when>
			<xsl:when test="$PackagingType='WR'">Intermediate bulk container, woven plastic, coated and liner</xsl:when>
			<xsl:when test="$PackagingType='WS'">Intermediate bulk container, plastic film</xsl:when>
			<xsl:when test="$PackagingType='WT'">Intermediate bulk container, textile with out coat/liner</xsl:when>
			<xsl:when test="$PackagingType='WU'">Intermediate bulk container, natural wood, with inner liner</xsl:when>
			<xsl:when test="$PackagingType='WV'">Intermediate bulk container, textile, coated</xsl:when>
			<xsl:when test="$PackagingType='WW'">Intermediate bulk container, textile, with liner</xsl:when>
			<xsl:when test="$PackagingType='WX'">Intermediate bulk container, textile, coated and liner</xsl:when>
			<xsl:when test="$PackagingType='WY'">Intermediate bulk container, plywood, with inner liner</xsl:when>
			<xsl:when test="$PackagingType='WZ'">Intermediate bulk container, reconstituted wood, with inner liner</xsl:when>
			<xsl:when test="$PackagingType='XA'">Bag, woven plastic, without inner coat/liner</xsl:when>
			<xsl:when test="$PackagingType='XB'">Bag, woven plastic, sift proof</xsl:when>
			<xsl:when test="$PackagingType='XC'">Bag, woven plastic, water resistant</xsl:when>
			<xsl:when test="$PackagingType='XD'">Bag, plastics film</xsl:when>
			<xsl:when test="$PackagingType='XF'">Bag, textile, without inner coat/liner</xsl:when>
			<xsl:when test="$PackagingType='XG'">Bag, textile, sift proof</xsl:when>
			<xsl:when test="$PackagingType='XH'">Bag, textile, water resistant</xsl:when>
			<xsl:when test="$PackagingType='XJ'">Bag, paper, multi-wall</xsl:when>
			<xsl:when test="$PackagingType='XK'">Bag, paper, multi-wall, water resistant</xsl:when>
			<xsl:when test="$PackagingType='YA'">Composite packaging, plastic receptacle in steel drum</xsl:when>
			<xsl:when test="$PackagingType='YB'">Composite packaging, plastic receptacle in steel crate box</xsl:when>
			<xsl:when test="$PackagingType='YC'">Composite packaging, plastic receptacle in aluminium drum</xsl:when>
			<xsl:when test="$PackagingType='YD'">Composite packaging, plastic receptacle in aluminium crate</xsl:when>
			<xsl:when test="$PackagingType='YF'">Composite packaging, plastic receptacle in wooden box</xsl:when>
			<xsl:when test="$PackagingType='YG'">Composite packaging, plastic receptacle in plywood drum</xsl:when>
			<xsl:when test="$PackagingType='YH'">Composite packaging, plastic receptacle in plywood box</xsl:when>
			<xsl:when test="$PackagingType='YJ'">Composite packaging, plastic receptacle in fibre drum</xsl:when>
			<xsl:when test="$PackagingType='YK'">Composite packaging, plastic receptacle in fibreboard box</xsl:when>
			<xsl:when test="$PackagingType='YL'">Composite packaging, plastic receptacle in plastic drum</xsl:when>
			<xsl:when test="$PackagingType='YM'">Composite packaging, plastic receptacle in solid plastic box</xsl:when>
			<xsl:when test="$PackagingType='YN'">Composite packaging, glass receptacle in steel drum</xsl:when>
			<xsl:when test="$PackagingType='YP'">Composite packaging, glass receptacle in steel crate box</xsl:when>
			<xsl:when test="$PackagingType='YQ'">Composite packaging, glass receptacle in aluminium drum</xsl:when>
			<xsl:when test="$PackagingType='YR'">Composite packaging, glass receptacle in aluminium crate</xsl:when>
			<xsl:when test="$PackagingType='YS'">Composite packaging, glass receptacle in wooden box</xsl:when>
			<xsl:when test="$PackagingType='YT'">Composite packaging, glass receptacle in plywood drum</xsl:when>
			<xsl:when test="$PackagingType='YV'">Composite packaging, glass receptacle in wickerwork hamper</xsl:when>
			<xsl:when test="$PackagingType='YW'">Composite packaging, glass receptacle in fibre drum</xsl:when>
			<xsl:when test="$PackagingType='YX'">Composite packaging, glass receptacle in fibreboard box</xsl:when>
			<xsl:when test="$PackagingType='YY'">Composite packaging, glass receptacle in expandable plastic pack</xsl:when>
			<xsl:when test="$PackagingType='YZ'">Composite packaging, glass receptacle in solid plastic pack</xsl:when>
			<xsl:when test="$PackagingType='ZA'">Intermediate bulk container, paper, multi-wall</xsl:when>
			<xsl:when test="$PackagingType='ZB'">Bag, large</xsl:when>
			<xsl:when test="$PackagingType='ZC'">Intermediate bulk container, paper, multi-wall, water resistant</xsl:when>
			<xsl:when test="$PackagingType='ZD'">Intermediate bulk container, rigid plastic, with structural equipment, solids</xsl:when>
			<xsl:when test="$PackagingType='ZF'">Intermediate bulk container, rigid plastic, freestanding, solids</xsl:when>
			<xsl:when test="$PackagingType='ZG'">Intermediate bulk container, rigid plastic, with structural equipment, pressurised</xsl:when>
			<xsl:when test="$PackagingType='ZH'">Intermediate bulk container, rigid plastic, freestanding, pressurised</xsl:when>
			<xsl:when test="$PackagingType='ZJ'">Intermediate bulk container, rigid plastic, with structural equipment, liquids</xsl:when>
			<xsl:when test="$PackagingType='ZK'">Intermediate bulk container, rigid plastic, freestanding, liquids</xsl:when>
			<xsl:when test="$PackagingType='ZL'">Intermediate bulk container, composite, rigid plastic, solids</xsl:when>
			<xsl:when test="$PackagingType='ZM'">Intermediate bulk container, composite, flexible plastic, solids</xsl:when>
			<xsl:when test="$PackagingType='ZN'">Intermediate bulk container, composite, rigid plastic, pressurised</xsl:when>
			<xsl:when test="$PackagingType='ZP'">Intermediate bulk container, composite, flexible plastic, pressurised</xsl:when>
			<xsl:when test="$PackagingType='ZQ'">Intermediate bulk container, composite, rigid plastic, liquids</xsl:when>
			<xsl:when test="$PackagingType='ZR'">Intermediate bulk container, composite, flexible plastic, liquids</xsl:when>
			<xsl:when test="$PackagingType='ZS'">Intermediate bulk container, composite</xsl:when>
			<xsl:when test="$PackagingType='ZT'">Intermediate bulk container, fibreboard</xsl:when>
			<xsl:when test="$PackagingType='ZU'">Intermediate bulk container, flexible</xsl:when>
			<xsl:when test="$PackagingType='ZV'">Intermediate bulk container, metal, other than steel</xsl:when>
			<xsl:when test="$PackagingType='ZW'">Intermediate bulk container, natural wood</xsl:when>
			<xsl:when test="$PackagingType='ZX'">Intermediate bulk container, plywood</xsl:when>
			<xsl:when test="$PackagingType='ZY'">Intermediate bulk container, reconstituted wood</xsl:when>
			<xsl:otherwise><xsl:value-of select="$PackagingType"/></xsl:otherwise>
		</xsl:choose>		
	</xsl:template>
	<xsl:template name="Country">
		<xsl:param name="CountryType" />
		<xsl:choose>
			<xsl:when test="$CountryType='AF'">Afganistan</xsl:when>
			<xsl:when test="$CountryType='DE'">Almanya</xsl:when>
			<xsl:when test="$CountryType='AD'">Andorra</xsl:when>
			<xsl:when test="$CountryType='AO'">Angola</xsl:when>
			<xsl:when test="$CountryType='AG'">Antigua ve Barbuda</xsl:when>
			<xsl:when test="$CountryType='AR'">Arjantin</xsl:when>
			<xsl:when test="$CountryType='AL'">Arnavutluk</xsl:when>
			<xsl:when test="$CountryType='AW'">Aruba</xsl:when>
			<xsl:when test="$CountryType='AU'">Avustralya</xsl:when>
			<xsl:when test="$CountryType='AT'">Avusturya</xsl:when>
			<xsl:when test="$CountryType='AZ'">Azerbaycan</xsl:when>
			<xsl:when test="$CountryType='BS'">Bahamalar</xsl:when>
			<xsl:when test="$CountryType='BH'">Bahreyn</xsl:when>
			<xsl:when test="$CountryType='BD'">Bangladeş</xsl:when>
			<xsl:when test="$CountryType='BB'">Barbados</xsl:when>
			<xsl:when test="$CountryType='EH'">Batı Sahra (MA)</xsl:when>
			<xsl:when test="$CountryType='BE'">Belçika</xsl:when>
			<xsl:when test="$CountryType='BZ'">Belize</xsl:when>
			<xsl:when test="$CountryType='BJ'">Benin</xsl:when>
			<xsl:when test="$CountryType='BM'">Bermuda</xsl:when>
			<xsl:when test="$CountryType='BY'">Beyaz Rusya</xsl:when>
			<xsl:when test="$CountryType='BT'">Bhutan</xsl:when>
			<xsl:when test="$CountryType='AE'">Birleşik Arap Emirlikleri</xsl:when>
			<xsl:when test="$CountryType='US'">Birleşik Devletler</xsl:when>
			<xsl:when test="$CountryType='GB'">Birleşik Krallık</xsl:when>
			<xsl:when test="$CountryType='BO'">Bolivya</xsl:when>
			<xsl:when test="$CountryType='BA'">Bosna-Hersek</xsl:when>
			<xsl:when test="$CountryType='BW'">Botsvana</xsl:when>
			<xsl:when test="$CountryType='BR'">Brezilya</xsl:when>
			<xsl:when test="$CountryType='BN'">Bruney</xsl:when>
			<xsl:when test="$CountryType='BG'">Bulgaristan</xsl:when>
			<xsl:when test="$CountryType='BF'">Burkina Faso</xsl:when>
			<xsl:when test="$CountryType='BI'">Burundi</xsl:when>
			<xsl:when test="$CountryType='TD'">Çad</xsl:when>
			<xsl:when test="$CountryType='KY'">Cayman Adaları</xsl:when>
			<xsl:when test="$CountryType='GI'">Cebelitarık (GB)</xsl:when>
			<xsl:when test="$CountryType='CZ'">Çek Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='DZ'">Cezayir</xsl:when>
			<xsl:when test="$CountryType='DJ'">Cibuti</xsl:when>
			<xsl:when test="$CountryType='CN'">Çin</xsl:when>
			<xsl:when test="$CountryType='DK'">Danimarka</xsl:when>
			<xsl:when test="$CountryType='CD'">Demokratik Kongo Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='TL'">Doğu Timor</xsl:when>
			<xsl:when test="$CountryType='DO'">Dominik Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='DM'">Dominika</xsl:when>
			<xsl:when test="$CountryType='EC'">Ekvador</xsl:when>
			<xsl:when test="$CountryType='GQ'">Ekvator Ginesi</xsl:when>
			<xsl:when test="$CountryType='SV'">El Salvador</xsl:when>
			<xsl:when test="$CountryType='ID'">Endonezya</xsl:when>
			<xsl:when test="$CountryType='ER'">Eritre</xsl:when>
			<xsl:when test="$CountryType='AM'">Ermenistan</xsl:when>
			<xsl:when test="$CountryType='MF'">Ermiş Martin (FR)</xsl:when>
			<xsl:when test="$CountryType='EE'">Estonya</xsl:when>
			<xsl:when test="$CountryType='ET'">Etiyopya</xsl:when>
			<xsl:when test="$CountryType='FK'">Falkland Adaları</xsl:when>
			<xsl:when test="$CountryType='FO'">Faroe Adaları (DK)</xsl:when>
			<xsl:when test="$CountryType='MA'">Fas</xsl:when>
			<xsl:when test="$CountryType='FJ'">Fiji</xsl:when>
			<xsl:when test="$CountryType='CI'">Fildişi Sahili</xsl:when>
			<xsl:when test="$CountryType='PH'">Filipinler</xsl:when>
			<xsl:when test="$CountryType='FI'">Finlandiya</xsl:when>
			<xsl:when test="$CountryType='FR'">Fransa</xsl:when>
			<xsl:when test="$CountryType='GF'">Fransız Guyanası (FR)</xsl:when>
			<xsl:when test="$CountryType='PF'">Fransız Polinezyası (FR)</xsl:when>
			<xsl:when test="$CountryType='GA'">Gabon</xsl:when>
			<xsl:when test="$CountryType='GM'">Gambiya</xsl:when>
			<xsl:when test="$CountryType='GH'">Gana</xsl:when>
			<xsl:when test="$CountryType='GN'">Gine</xsl:when>
			<xsl:when test="$CountryType='GW'">Gine Bissau</xsl:when>
			<xsl:when test="$CountryType='GD'">Grenada</xsl:when>
			<xsl:when test="$CountryType='GL'">Grönland (DK)</xsl:when>
			<xsl:when test="$CountryType='GP'">Guadeloupe (FR)</xsl:when>
			<xsl:when test="$CountryType='GT'">Guatemala</xsl:when>
			<xsl:when test="$CountryType='GG'">Guernsey (GB)</xsl:when>
			<xsl:when test="$CountryType='ZA'">Güney Afrika</xsl:when>
			<xsl:when test="$CountryType='KR'">Güney Kore</xsl:when>
			<xsl:when test="$CountryType='GE'">Gürcistan</xsl:when>
			<xsl:when test="$CountryType='GY'">Guyana</xsl:when>
			<xsl:when test="$CountryType='HT'">Haiti</xsl:when>
			<xsl:when test="$CountryType='IN'">Hindistan</xsl:when>
			<xsl:when test="$CountryType='HR'">Hırvatistan</xsl:when>
			<xsl:when test="$CountryType='NL'">Hollanda</xsl:when>
			<xsl:when test="$CountryType='HN'">Honduras</xsl:when>
			<xsl:when test="$CountryType='HK'">Hong Kong (CN)</xsl:when>
			<xsl:when test="$CountryType='VG'">İngiliz Virjin Adaları</xsl:when>
			<xsl:when test="$CountryType='IQ'">Irak</xsl:when>
			<xsl:when test="$CountryType='IR'">İran</xsl:when>
			<xsl:when test="$CountryType='IE'">İrlanda</xsl:when>
			<xsl:when test="$CountryType='ES'">İspanya</xsl:when>
			<xsl:when test="$CountryType='IL'">İsrail</xsl:when>
			<xsl:when test="$CountryType='SE'">İsveç</xsl:when>
			<xsl:when test="$CountryType='CH'">İsviçre</xsl:when>
			<xsl:when test="$CountryType='IT'">İtalya</xsl:when>
			<xsl:when test="$CountryType='IS'">İzlanda</xsl:when>
			<xsl:when test="$CountryType='JM'">Jamaika</xsl:when>
			<xsl:when test="$CountryType='JP'">Japonya</xsl:when>
			<xsl:when test="$CountryType='JE'">Jersey (GB)</xsl:when>
			<xsl:when test="$CountryType='KH'">Kamboçya</xsl:when>
			<xsl:when test="$CountryType='CM'">Kamerun</xsl:when>
			<xsl:when test="$CountryType='CA'">Kanada</xsl:when>
			<xsl:when test="$CountryType='ME'">Karadağ</xsl:when>
			<xsl:when test="$CountryType='QA'">Katar</xsl:when>
			<xsl:when test="$CountryType='KZ'">Kazakistan</xsl:when>
			<xsl:when test="$CountryType='KE'">Kenya</xsl:when>
			<xsl:when test="$CountryType='CY'">Kıbrıs</xsl:when>
			<xsl:when test="$CountryType='KG'">Kırgızistan</xsl:when>
			<xsl:when test="$CountryType='KI'">Kiribati</xsl:when>
			<xsl:when test="$CountryType='CO'">Kolombiya</xsl:when>
			<xsl:when test="$CountryType='KM'">Komorlar</xsl:when>
			<xsl:when test="$CountryType='CG'">Kongo Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='KV'">Kosova (RS)</xsl:when>
			<xsl:when test="$CountryType='CR'">Kosta Rika</xsl:when>
			<xsl:when test="$CountryType='CU'">Küba</xsl:when>
			<xsl:when test="$CountryType='KW'">Kuveyt</xsl:when>
			<xsl:when test="$CountryType='KP'">Kuzey Kore</xsl:when>
			<xsl:when test="$CountryType='LA'">Laos</xsl:when>
			<xsl:when test="$CountryType='LS'">Lesoto</xsl:when>
			<xsl:when test="$CountryType='LV'">Letonya</xsl:when>
			<xsl:when test="$CountryType='LR'">Liberya</xsl:when>
			<xsl:when test="$CountryType='LY'">Libya</xsl:when>
			<xsl:when test="$CountryType='LI'">Lihtenştayn</xsl:when>
			<xsl:when test="$CountryType='LT'">Litvanya</xsl:when>
			<xsl:when test="$CountryType='LB'">Lübnan</xsl:when>
			<xsl:when test="$CountryType='LU'">Lüksemburg</xsl:when>
			<xsl:when test="$CountryType='HU'">Macaristan</xsl:when>
			<xsl:when test="$CountryType='MG'">Madagaskar</xsl:when>
			<xsl:when test="$CountryType='MO'">Makao (CN)</xsl:when>
			<xsl:when test="$CountryType='MK'">Makedonya</xsl:when>
			<xsl:when test="$CountryType='MW'">Malavi</xsl:when>
			<xsl:when test="$CountryType='MV'">Maldivler</xsl:when>
			<xsl:when test="$CountryType='MY'">Malezya</xsl:when>
			<xsl:when test="$CountryType='ML'">Mali</xsl:when>
			<xsl:when test="$CountryType='MT'">Malta</xsl:when>
			<xsl:when test="$CountryType='IM'">Man Adası (GB)</xsl:when>
			<xsl:when test="$CountryType='MH'">Marshall Adaları</xsl:when>
			<xsl:when test="$CountryType='MQ'">Martinique (FR)</xsl:when>
			<xsl:when test="$CountryType='MU'">Mauritius</xsl:when>
			<xsl:when test="$CountryType='YT'">Mayotte (FR)</xsl:when>
			<xsl:when test="$CountryType='MX'">Meksika</xsl:when>
			<xsl:when test="$CountryType='FM'">Mikronezya</xsl:when>
			<xsl:when test="$CountryType='EG'">Mısır</xsl:when>
			<xsl:when test="$CountryType='MN'">Moğolistan</xsl:when>
			<xsl:when test="$CountryType='MD'">Moldova</xsl:when>
			<xsl:when test="$CountryType='MC'">Monako</xsl:when>
			<xsl:when test="$CountryType='MR'">Moritanya</xsl:when>
			<xsl:when test="$CountryType='MZ'">Mozambik</xsl:when>
			<xsl:when test="$CountryType='MM'">Myanmar</xsl:when>
			<xsl:when test="$CountryType='NA'">Namibya</xsl:when>
			<xsl:when test="$CountryType='NR'">Nauru</xsl:when>
			<xsl:when test="$CountryType='NP'">Nepal</xsl:when>
			<xsl:when test="$CountryType='NE'">Nijer</xsl:when>
			<xsl:when test="$CountryType='NG'">Nijerya</xsl:when>
			<xsl:when test="$CountryType='NI'">Nikaragua</xsl:when>
			<xsl:when test="$CountryType='NO'">Norveç</xsl:when>
			<xsl:when test="$CountryType='CF'">Orta Afrika Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='UZ'">Özbekistan</xsl:when>
			<xsl:when test="$CountryType='PK'">Pakistan</xsl:when>
			<xsl:when test="$CountryType='PW'">Palau</xsl:when>
			<xsl:when test="$CountryType='PA'">Panama</xsl:when>
			<xsl:when test="$CountryType='PG'">Papua Yeni Gine</xsl:when>
			<xsl:when test="$CountryType='PY'">Paraguay</xsl:when>
			<xsl:when test="$CountryType='PE'">Peru</xsl:when>
			<xsl:when test="$CountryType='PL'">Polonya</xsl:when>
			<xsl:when test="$CountryType='PT'">Portekiz</xsl:when>
			<xsl:when test="$CountryType='PR'">Porto Riko (US)</xsl:when>
			<xsl:when test="$CountryType='RE'">Réunion (FR)</xsl:when>
			<xsl:when test="$CountryType='RO'">Romanya</xsl:when>
			<xsl:when test="$CountryType='RW'">Ruanda</xsl:when>
			<xsl:when test="$CountryType='RU'">Rusya</xsl:when>
			<xsl:when test="$CountryType='BL'">Saint Barthélemy (FR)</xsl:when>
			<xsl:when test="$CountryType='KN'">Saint Kitts ve Nevis</xsl:when>
			<xsl:when test="$CountryType='LC'">Saint Lucia</xsl:when>
			<xsl:when test="$CountryType='PM'">Saint Pierre ve Miquelon (FR)</xsl:when>
			<xsl:when test="$CountryType='VC'">Saint Vincent ve Grenadinler</xsl:when>
			<xsl:when test="$CountryType='WS'">Samoa</xsl:when>
			<xsl:when test="$CountryType='SM'">San Marino</xsl:when>
			<xsl:when test="$CountryType='ST'">São Tomé ve Príncipe</xsl:when>
			<xsl:when test="$CountryType='SN'">Senegal</xsl:when>
			<xsl:when test="$CountryType='SC'">Seyşeller</xsl:when>
			<xsl:when test="$CountryType='SL'">Sierra Leone</xsl:when>
			<xsl:when test="$CountryType='CL'">Şili</xsl:when>
			<xsl:when test="$CountryType='SG'">Singapur</xsl:when>
			<xsl:when test="$CountryType='RS'">Sırbistan</xsl:when>
			<xsl:when test="$CountryType='SK'">Slovakya Cumhuriyeti</xsl:when>
			<xsl:when test="$CountryType='SI'">Slovenya</xsl:when>
			<xsl:when test="$CountryType='SB'">Solomon Adaları</xsl:when>
			<xsl:when test="$CountryType='SO'">Somali</xsl:when>
			<xsl:when test="$CountryType='SS'">South Sudan</xsl:when>
			<xsl:when test="$CountryType='SJ'">Spitsbergen (NO)</xsl:when>
			<xsl:when test="$CountryType='LK'">Sri Lanka</xsl:when>
			<xsl:when test="$CountryType='SD'">Sudan</xsl:when>
			<xsl:when test="$CountryType='SR'">Surinam</xsl:when>
			<xsl:when test="$CountryType='SY'">Suriye</xsl:when>
			<xsl:when test="$CountryType='SA'">Suudi Arabistan</xsl:when>
			<xsl:when test="$CountryType='SZ'">Svaziland</xsl:when>
			<xsl:when test="$CountryType='TJ'">Tacikistan</xsl:when>
			<xsl:when test="$CountryType='TZ'">Tanzanya</xsl:when>
			<xsl:when test="$CountryType='TH'">Tayland</xsl:when>
			<xsl:when test="$CountryType='TW'">Tayvan</xsl:when>
			<xsl:when test="$CountryType='TG'">Togo</xsl:when>
			<xsl:when test="$CountryType='TO'">Tonga</xsl:when>
			<xsl:when test="$CountryType='TT'">Trinidad ve Tobago</xsl:when>
			<xsl:when test="$CountryType='TN'">Tunus</xsl:when>
			<xsl:when test="$CountryType='TR'">Türkiye</xsl:when>
			<xsl:when test="$CountryType='TM'">Türkmenistan</xsl:when>
			<xsl:when test="$CountryType='TC'">Turks ve Caicos</xsl:when>
			<xsl:when test="$CountryType='TV'">Tuvalu</xsl:when>
			<xsl:when test="$CountryType='UG'">Uganda</xsl:when>
			<xsl:when test="$CountryType='UA'">Ukrayna</xsl:when>
			<xsl:when test="$CountryType='OM'">Umman</xsl:when>
			<xsl:when test="$CountryType='JO'">Ürdün</xsl:when>
			<xsl:when test="$CountryType='UY'">Uruguay</xsl:when>
			<xsl:when test="$CountryType='VU'">Vanuatu</xsl:when>
			<xsl:when test="$CountryType='VA'">Vatikan</xsl:when>
			<xsl:when test="$CountryType='VE'">Venezuela</xsl:when>
			<xsl:when test="$CountryType='VN'">Vietnam</xsl:when>
			<xsl:when test="$CountryType='WF'">Wallis ve Futuna (FR)</xsl:when>
			<xsl:when test="$CountryType='YE'">Yemen</xsl:when>
			<xsl:when test="$CountryType='NC'">Yeni Kaledonya (FR)</xsl:when>
			<xsl:when test="$CountryType='NZ'">Yeni Zelanda</xsl:when>
			<xsl:when test="$CountryType='CV'">Yeşil Burun Adaları</xsl:when>
			<xsl:when test="$CountryType='GR'">Yunanistan</xsl:when>
			<xsl:when test="$CountryType='ZM'">Zambiya</xsl:when>
			<xsl:when test="$CountryType='ZW'">Zimbabve</xsl:when>
			<xsl:otherwise><xsl:value-of select="$CountryType"/></xsl:otherwise>
		</xsl:choose>
		
	</xsl:template>
	<xsl:template name='Party_Other'>
		<xsl:param name="PartyType" />
		<xsl:for-each select="cbc:WebsiteURI">
			<tr align="left">
				<td>
					<xsl:text>Web Sitesi: </xsl:text>
					<xsl:value-of select="."/>
				</td>
			</tr>
		</xsl:for-each>
		<xsl:for-each select="cac:Contact/cbc:ElectronicMail">
			<tr align="left">
				<td>
					<xsl:text>E-Posta: </xsl:text>
					<xsl:value-of select="."/>
				</td>
			</tr>
		</xsl:for-each>	
		<xsl:for-each select="cac:Contact">
			<xsl:if test="cbc:Telephone or cbc:Telefax">
				<tr align="left">
					<td style="width:469px; " align="left">
						<xsl:for-each select="cbc:Telephone">
							<xsl:text>Tel: </xsl:text>
							<xsl:apply-templates/>
						</xsl:for-each>
						<xsl:for-each select="cbc:Telefax">
							<xsl:text> Fax: </xsl:text>
							<xsl:apply-templates/>
						</xsl:for-each>
						<xsl:text>&#160;</xsl:text>
					</td>
				</tr>
			</xsl:if>
		</xsl:for-each>
		<xsl:if test="$PartyType!='TAXFREE' and $PartyType!='EXPORT'">
			<xsl:for-each select="cac:PartyTaxScheme/cac:TaxScheme/cbc:Name">
				<tr align="left">
					<td>
						<xsl:text>Vergi Dairesi: </xsl:text>
						<xsl:apply-templates/>
					</td>
				</tr>
			</xsl:for-each>
			<xsl:for-each select="cac:PartyIdentification">
			<tr align="left">
				<td>
					<xsl:value-of select="cbc:ID/@schemeID"/>
					<xsl:text>: </xsl:text>
					<xsl:value-of select="cbc:ID"/>
				</td>
			</tr>
			</xsl:for-each>
		</xsl:if>
	</xsl:template>
	<xsl:template name="Curr_Type">
		<xsl:value-of select="format-number(., '###.##0,00', 'european')"/>		
		<xsl:if	test="@currencyID">
			<xsl:text> </xsl:text>
			<xsl:choose>
				<xsl:when test="@currencyID = 'TRL' or @currencyID = 'TRY'">
					<xsl:text>TL</xsl:text>					
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="@currencyID"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>		
	</xsl:template>
</xsl:stylesheet>
