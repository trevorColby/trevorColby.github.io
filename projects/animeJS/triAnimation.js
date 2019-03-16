//Need to check if we are on mobile or desktop to set our appropriate zoom for svg
function isMobileDevice() {
	    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
var svgElement = document.getElementById('svgElem');
if(isMobileDevice()) {
	svgElement.style.height = "auto";
	svgElement.style.width = "100%";
}else{
	svgElement.style.height = "50%";
	svgElement.style.width = "50%";
}

//Formatting Solution for SVG animation of spotlight unerline
var pageSelect0 = document.getElementById("pageSelect0");
var pS0Container = document.getElementById("pageSelect0C");
pageSelect0.style.left = (pS0Container.offsetWidth - pageSelect0.offsetWidth)/2 + "px";

var pageSelect1 = document.getElementById("pageSelect1");
var pS1Container = document.getElementById("pageSelect1C");
pageSelect1.style.left = (pS1Container.offsetWidth - pageSelect1.offsetWidth)/2 + "px";

var pageSelect2 = document.getElementById("pageSelect2");
var pS2Container = document.getElementById("pageSelect2C");
pageSelect2.style.left = (pS2Container.offsetWidth - pageSelect2.offsetWidth)/2 + "px";

var pageSelect3 = document.getElementById("pageSelect3");
var pS3Container = document.getElementById("pageSelect3C");
pageSelect3.style.left = (pS3Container.offsetWidth - pageSelect3.offsetWidth)/2 + "px";

//Wolf paths 
var wPaths = [
     {id:"#path1000",d:"M 62.006529,54.853808 57.997486,89.866114 72.430041,95.746045 Z"},
     {id:"#path1002",d:"M 62.006529,54.853808 73.766388,67.950013 79.913587,90.667924 Z"},
     {id:"#path1004",d:"M 79.913585,90.667924 72.430041,95.746045 62.006529,54.853808 Z"},
     {id:"#path1006",d:"M 73.766388,67.950013 89.000752,85.055264 79.913585,90.667924 Z"},
     {id:"#path1008",d:"M 62.006529,54.853808 93.277064,77.304447 89.00075,85.055262 Z"},
     {id:"#path1010",d:"M 112.52047,76.769909 144.05827,54.051998 117.06405,85.055264 Z"},
     {id:"#path1012",d:"M 117.06405,85.055262 125.61668,90.667924 133.10022,66.079128 Z"},
     {id:"#path1014",d:"M 125.61668,90.667924 144.05827,54.051998 133.10022,66.079128 Z"},
     {id:"#path1016",d:"M 133.10022,95.478776 125.61668,90.667924 144.05827,54.051998 Z"},
     {id:"#path1018",d:"M 133.10022,95.478776 147.80005,88.797036 144.05827,54.051998 Z"},
     {id:"#path1020",d:"M 133.10022,95.478776 140.3165,101.3587 147.80005,88.797034 Z"},
     {id:"#path1022",d:"M 72.430041,95.746045 65.481032,101.3587 57.997486,89.866112 Z"},
     {id:"#path1024",d:"M 89.00075,85.055262 102.89877,113.11856 117.06405,85.055262 Z"},
     {id:"#path1026",d:"M 112.52047,76.769909 106.64054,85.055264 117.06405,85.055262 Z"},
     {id:"#path1028",d:"M 93.277062,77.304447 99.156992,85.055264 89.00075,85.055262 Z"},
     {id:"#path1030",d:"M 99.15699,85.055262 102.6315,77.304447 106.64054,85.055262 Z"},
     {id:"#path1032",d:"M 92.942975,77.137404 102.6315,77.304447 99.15699,85.055262 Z"},
     {id:"#path1034",d:"M 102.6315,77.304447 112.52047,76.769909 106.64054,85.055262 Z"},
     {id:"#path1036",d:"M 102.89877,113.11856 88.466212,120.60211 97.553377,102.69505 Z"},
     {id:"#path1038",d:"M 102.89877,113.11856 117.59859,120.60211 107.97689,102.16051 Z"},
     {id:"#path1040",d:"M 117.59859,120.60211 122.40944,112.04948 107.97689,102.16051 Z"},
     {id:"#path1042",d:"M 88.466212,120.60211 83.120822,112.31676 97.553377,102.69505 Z"},
     {id:"#path1044",d:"M 107.97689,102.16051 117.06405,85.055262 122.40944,112.04948 Z"},
     {id:"#path1046",d:"M 83.120822,112.31676 89.00075,85.055262 97.553377,102.69505 Z"},
     {id:"#path1048",d:"M 122.40944,112.04948 151.00728,109.37679 117.06405,85.055262 Z"},
     {id:"#path1050",d:"M 83.120822,112.31676 54.255714,109.37679 89.00075,85.055262 Z"},
     {id:"#path1052",d:"M 83.120822,112.31676 54.255714,109.37679 69.490076,120.33484 Z"},
     {id:"#path1054",d:"M 122.40944,112.04948 137.10927,120.60211 151.00728,109.37679 Z"},
     {id:"#path1056",d:"M 69.490076,120.33484 88.466212,120.60211 83.120822,112.31676 Z"},
     {id:"#path1058",d:"M 122.40944,112.04948 117.59859,120.60211 137.10927,120.52901 Z"},
     {id:"#path1060",d:"M 88.489836,120.34225 117.61926,120.51941 103.08185,113.10675 Z"},
     {id:"#path1062",d:"M 88.466212,120.60211 97.820645,162.02889 102.89877,162.29616 Z"},
     {id:"#path1064",d:"M 102.89877,162.29616 117.59859,120.60211 108.11052,162.42979 Z"},
     {id:"#path1066",d:"M 88.466212,120.60211 117.61926,120.51941 102.89877,162.29614 Z"},
     {id:"#path1068",d:"M 97.820643,162.02889 93.360117,167.92113 102.85378,168.33129 Z"},
     {id:"#path1070",d:"M 102.80952,167.92113 108.11052,162.42979 112.44792,168.11012 Z"},
     {id:"#path1072",d:"M 97.820643,162.02889 108.11052,162.42979 102.80952,167.92113 Z"},
     {id:"#path1074",d:"M 102.80952,167.92113 98.840773,175.66964 106.96726,175.85863 Z"},
     {id:"#path1076",d:"M 93.360117,167.92113 98.840773,175.66964 102.58591,168.32362 Z"},
     {id:"#path1078",d:"M 102.80952,167.92113 106.96726,175.85863 112.44792,168.11012 Z"},
     {id:"#path1080",d:"M 98.840773,175.66964 96.384072,172.10161 100.62698,172.3856 Z"},
     {id:"#path1082",d:"M 105.10374,172.31876 109.71414,172.00138 106.96726,175.85863 Z"},
     {id:"#path1084",d:"M 98.840773,175.66964 103.23285,177.73097 106.96726,175.85863 Z"},
     {id:"#path1086",d:"M 88.466212,120.60211 93.360117,167.92113 97.820643,162.02889 Z"},
     {id:"#path1088",d:"M 117.59859,120.60211 108.11052,162.42979 112.44792,168.11012 Z"},
     {id:"#path1090",d:"M 117.59859,120.60211 121.99181,170.09449 113.58184,178.50446 Z"},
     {id:"#path1092",d:"M 113.58184,178.50446 112.44792,168.11012 106.96726,175.85863 Z"},
     {id:"#path1094",d:"M 83.816218,170.28348 92.415176,178.69345 88.466212,120.60211 Z"},
     {id:"#path1096",d:"M 93.360117,167.92113 92.415174,178.69345 98.840773,175.66964 Z"},
     {id:"#path1098",d:"M 95.06101,177.37053 98.084821,181.62277 98.840773,175.66964 Z"},
     {id:"#path1100",d:"M 106.96726,175.85863 107.9122,182.00074 110.55803,177.55952 Z"},
     {id:"#path1102",d:"M 98.084819,181.62277 103.09301,183.04018 107.9122,182.00074 Z"},
     {id:"#path1104",d:"M 137.10927,120.60211 119.53497,143.91964 125.20461,120.57961 Z"},
     {id:"#path1106",d:"M 125.20461,120.57961 118.02306,125.77678 117.59859,120.60211 Z"},
     {id:"#path1108",d:"M 78.997023,120.57961 87.784968,126.06027 88.466212,120.60211 Z"},
     {id:"#path1110",d:"M 69.490076,120.33484 86.462051,143.73065 78.997023,120.57961 Z"},
     {id:"#path1112",d:"M 69.490076,120.33484 74.177826,168.11012 86.462049,143.73065 Z"},
     {id:"#path1114",d:"M 74.177826,168.11012 84.383183,165.84226 86.462049,143.73065 Z"},
     {id:"#path1116",d:"M 137.10927,120.60211 131.7247,168.3936 119.53497,143.91964 Z"},
     {id:"#path1118",d:"M 121.61384,165.93675 131.7247,168.3936 119.53497,143.91964 Z"},
     {id:"#path1120",d:"M 69.490076,120.33484 49.609374,134.09226 74.177826,168.11012 Z"},
     {id:"#path1122",d:"M 54.255714,109.37679 49.609374,134.09226 69.490076,120.33484 Z"},
     {id:"#path1124",d:"M 49.609374,134.09226 47.15253,146.84896 74.177826,168.11012 Z"},
     {id:"#path1126",d:"M 137.10927,120.60211 156.10416,133.90327 151.00728,109.37679 Z"},
     {id:"#path1128",d:"M 156.10416,133.90327 131.7247,168.3936 137.10927,120.60211 Z"},
     {id:"#path1130",d:"M 156.10416,133.90327 158.75,146.65997 131.7247,168.3936 Z"},
     {id:"#path1132",d:"M 88.466212,120.60211 92.415174,178.69345 93.360117,167.92113 Z"},
     {id:"#path1134",d:"M 113.58184,178.50446 112.44792,168.11012 117.59859,120.60211 Z"},
     {id:"#path1136",d:"M 65.481032,101.3587 89.00075,85.055262 79.913585,90.667924 Z"},
     {id:"#path1138",d:"M 117.06405,85.055262 125.61668,90.667924 140.3165,101.3587 Z"},
     {id:"#path1140",d:"M 57.997486,89.866112 66.149209,71.157247 72.430041,95.746045 Z"},
     {id:"#path1142",d:"M 133.10022,95.478776 147.80005,88.797034 139.64833,70.622709 Z"},
     {id:"#path1144",d:"M 62.941972,97.750565 54.255714,109.37679 65.481032,101.3587 Z"},
     {id:"#path1146",d:"M 142.72193,97.216028 151.00728,109.37679 140.3165,101.3587 Z"},
     {id:"#path1148",d:"M 60.665177,94.593747 60.287201,101.01934 62.941972,97.750563 Z"},
     {id:"#path1150",d:"M 144.95387,93.837796 145.52083,101.39732 142.72193,97.216028 Z"},
];

//bull outline
var bPaths = [

     {id:"#path1000",d:"M 4.7360721,66.302683 7.3634421,75.732363 11.940142,75.183053 Z"},
     {id:"#path1002",d:"M 7.3634421,75.732363 13.635212,81.408473 11.940142,75.183053 Z"},
     {id:"#path1004",d:"M 11.940142,75.183053 17.703392,77.014063 13.635212,81.408473 Z"},
     {id:"#path1006",d:"M 17.703392,77.014063 21.771572,81.866223 13.635212,81.408473 Z"},
     {id:"#path1008",d:"M 17.703392,77.014063 23.381892,73.626703 21.771572,81.866223 Z"},
     {id:"#path1010",d:"M 21.771572,81.866223 28.212852,78.845063 23.381892,73.626703 Z"},
     {id:"#path1012",d:"M 23.381892,73.626703 30.162192,72.253453 28.212852,78.845063 Z"},
     {id:"#path1014",d:"M 25.161722,87.176143 59.99549,99.535428 71.94577,72.711203 Z"},
     {id:"#path1016",d:"M 29.568912,85.711333 36.942482,86.077533 32.704802,92.760703 Z"},
     {id:"#path1018",d:"M 29.568912,85.711333 29.229892,89.556443 32.704802,92.760703 Z"},
     {id:"#path1020",d:"M 36.942482,86.077533 41.773452,93.767753 28.890882,97.887513 Z"},
     {id:"#path1022",d:"M 28.890882,97.887513 15.838812,100.90868 29.568912,104.29603 Z"},
     {id:"#path1024",d:"M 28.890882,97.887513 38.129042,100.08473 29.568912,104.29603 Z"},
     {id:"#path1026",d:"M 28.890882,97.887513 41.773452,93.767753 38.129042,100.08473 Z"},
     {id:"#path1028",d:"M 28.890882,97.887513 15.838812,100.90868 18.974702,96.788913 Z"},
     {id:"#path1030",d:"M 15.838812,100.90868 6.8549221,85.711333 18.974702,96.788913 Z"},
     {id:"#path1032",d:"M 59.99549,99.535428 25.161722,87.176143 29.568912,104.29603 Z"},
     {id:"#path1034",d:"M 71.94577,72.711203 78.38705,59.436413 94.744514,66.028033 Z"},
     {id:"#path1036",d:"M 59.99549,99.535428 96.778604,112.0778 94.744514,66.028033 Z"},
     {id:"#path1038",d:"M 114.66164,97.887513 124.91683,89.373343 94.744514,66.028033 Z"},
     {id:"#path1040",d:"M 124.91683,89.373343 138.47743,94.500153 134.40925,130.93715 Z"},
     {id:"#path1042",d:"M 138.47743,94.500153 164.92059,94.591703 134.40925,130.93715 Z"},
     {id:"#path1044",d:"M 164.92059,94.591703 182.97312,129.28925 188.56687,106.21859 Z"},
     {id:"#path1046",d:"M 164.92059,94.591703 167.37844,154.19091 182.97312,129.28925 Z"},
     {id:"#path1048",d:"M 182.97312,129.28925 193.65209,125.35259 187.63458,110.52145 Z"},
     {id:"#path1050",d:"M 188.56687,106.21859 193.39783,115.37361 187.63458,110.52145 Z"},
     {id:"#path1052",d:"M 193.65209,125.35259 197.97453,139.54287 193.39783,115.37361 Z"},
     {id:"#path1054",d:"M 197.97453,139.54287 202.04271,146.31759 193.39783,115.37361 Z"},
     {id:"#path1056",d:"M 202.04271,146.31759 213.82347,144.57813 201.19517,143.57108 Z"},
     {id:"#path1058",d:"M 213.82347,144.57813 218.14592,139.26822 212.46742,143.11333 Z"},
     {id:"#path1060",d:"M 212.46742,143.11333 201.19517,143.57108 213.82347,144.57813 Z"},
     {id:"#path1062",d:"M 212.46742,143.11333 218.9087,135.88086 218.14592,139.26822 Z"},
     {id:"#path1064",d:"M 218.9087,135.88086 222.80737,135.42311 218.14592,139.26822 Z"},
     {id:"#path1066",d:"M 218.14592,139.26822 221.45131,143.47953 222.80737,135.42311 Z"},
     {id:"#path1068",d:"M 222.80737,135.42311 227.80784,142.47248 221.45131,143.47953 Z"},
     {id:"#path1070",d:"M 227.80784,142.47248 231.45225,142.56403 225.77375,139.35977 Z"},
     {id:"#path1072",d:"M 134.40925,130.93715 141.78282,144.85278 167.37844,154.19091 Z"},
     {id:"#path1074",d:"M 134.40925,130.93715 118.72981,147.69084 141.78282,144.85278 Z"},
     {id:"#path1076",d:"M 96.778604,112.0778 134.40925,130.93715 114.66164,97.887513 Z"},
     {id:"#path1078",d:"M 59.99549,99.535428 46.519652,132.40195 29.568912,104.29603 Z"},
     {id:"#path1080",d:"M 59.99549,99.535428 55.927312,127.45824 46.519652,132.40195 Z"},
     {id:"#path1082",d:"M 46.519652,132.40195 52.367662,131.9442 55.927312,127.45824 Z"},
     {id:"#path1084",d:"M 59.99549,99.535428 65.58923,123.24693 96.778604,112.0778 Z"},
     {id:"#path1086",d:"M 65.58923,123.24693 72.6238,140.73302 96.778604,112.0778 Z"},
     {id:"#path1088",d:"M 72.6238,140.73302 70.67446,174.9728 79.40409,167.74034 Z"},
     {id:"#path1090",d:"M 72.6238,140.73302 97.626144,128.46529 96.778604,112.0778 Z"},
     {id:"#path1092",d:"M 72.6238,140.73302 79.40409,167.74034 97.626144,128.46529 Z"},
     {id:"#path1094",d:"M 79.40409,167.74034 78.38705,182.02217 70.67446,174.9728 Z"},
     {id:"#path1096",d:"M 70.67446,174.9728 62.96187,188.79689 78.38705,182.02217 Z"},
     {id:"#path1098",d:"M 62.96187,188.79689 73.21707,190.53634 78.38705,182.02217 Z"},
     {id:"#path1100",d:"M 98.727944,171.1277 88.557494,148.51479 89.659294,160.78252 Z"},
     {id:"#path1102",d:"M 89.023644,147.46196 98.473684,145.49364 97.626144,128.46529 Z"},
     {id:"#path1104",d:"M 98.473684,145.49364 98.727944,171.1277 88.557494,148.51479 Z"},
     {id:"#path1106",d:"M 98.727944,157.94447 107.11855,169.4798 98.727944,171.1277 Z"},
     {id:"#path1108",d:"M 98.727944,171.1277 98.855074,185.08911 107.11855,169.4798 Z"},
     {id:"#path1110",d:"M 107.11855,169.4798 107.71183,181.244 98.855074,185.08911 Z"},
     {id:"#path1112",d:"M 97.626144,128.46529 118.72981,147.69084 98.473684,145.49364 Z"},
     {id:"#path1114",d:"M 97.626144,128.46529 134.40925,130.93715 118.72981,147.69084 Z"},
     {id:"#path1116",d:"M 182.97312,129.28925 192.01739,163.41442 193.65209,125.35259 Z"},
     {id:"#path1118",d:"M 172.71995,146.84206 182.97312,129.28925 192.01739,163.41442 Z"},
     {id:"#path1120",d:"M 192.01739,163.41442 193.09612,181.02255 201.48631,173.12479 Z"},
     {id:"#path1122",d:"M 192.01739,163.41442 193.09612,146.97153 201.48631,173.12479 Z"},
     {id:"#path1124",d:"M 193.09612,146.97153 201.00687,155.25771 201.48631,173.12479 Z"},
     {id:"#path1126",d:"M 201.48631,173.12479 203.34414,179.46889 200.22779,182.12306 Z"},
     {id:"#path1128",d:"M 201.48631,173.12479 184.58608,190.1503 199.32884,190.02083 Z"},
     {id:"#path1130",d:"M 163.19109,177.20314 169.42381,186.78404 165.58829,187.17245 Z"},
     {id:"#path1132",d:"M 154.08175,190.92713 163.19109,177.20314 166.72696,191.63922 Z"},
     {id:"#path1134",d:"M 163.19109,177.20314 180.15126,161.66655 169.30395,181.21676 Z"},
     {id:"#path1136",d:"M 169.42381,186.78404 163.19109,177.20314 169.30395,181.21676 Z"},
     {id:"#path1138",d:"M 163.19109,177.20314 166.66703,165.16229 180.15126,161.66655 Z"},
     {id:"#path1140",d:"M 166.66703,165.16229 167.37844,154.19091 180.15126,161.66655 Z"},
     {id:"#path1142",d:"M 166.66703,165.16229 148.44833,155.7756 167.37844,154.19091 Z"},
     {id:"#path1144",d:"M 141.78282,144.85278 148.44833,155.7756 167.37844,154.19091 Z"},
     {id:"#path1146",d:"M 25.161722,87.176143 78.38705,59.436413 71.94577,72.711203 Z"},
     {id:"#path1148",d:"M 28.212852,78.845063 25.161722,87.176143 38.596782,80.164193 Z"},
     {id:"#path1150",d:"M 30.162192,72.253453 38.596782,80.164193 28.212852,78.845063 Z"},

];
//end bull paths

//boar paths
var baPaths = [
     {id:"#path1000",d:"M 54.529215,17.308059 66.463795,50.649108 64.569415,30.000388 Z"},
     {id:"#path1002",d:"M 54.529215,17.308059 48.656645,49.512488 68.168735,64.099198 Z"},
     {id:"#path1004",d:"M 54.529215,17.308059 66.463795,50.649108 68.168735,64.099198 Z"},
     {id:"#path1006",d:"M 64.569415,30.000388 79.724445,51.785738 71.957495,55.385058 Z"},
     {id:"#path1008",d:"M 64.569415,30.000388 68.737045,73.192208 71.957495,55.385058 Z"},
     {id:"#path1010",d:"M 71.957495,55.385058 106.05631,35.683528 85.407575,90.809928 Z"},
     {id:"#path1012",d:"M 71.957495,55.385058 67.221545,78.496468 85.407575,90.809928 Z"},
     {id:"#path1014",d:"M 67.221545,78.496468 75.177935,89.673298 81.239945,87.589488 Z"},
     {id:"#path1016",d:"M 106.05631,35.683528 125.5684,90.431048 105.67743,52.732928 Z"},
     {id:"#path1018",d:"M 106.05631,35.683528 85.407575,90.809928 105.67743,52.732928 Z"},
     {id:"#path1020",d:"M 106.05631,35.683528 138.82904,55.763928 125.5684,90.431048 Z"},
     {id:"#path1022",d:"M 131.63041,51.027988 147.1643,30.947578 138.82904,55.763928 Z"},
     {id:"#path1024",d:"M 147.1643,30.947578 142.23892,73.571088 138.82904,55.763928 Z"},
     {id:"#path1026",d:"M 147.1643,30.947578 157.01507,16.360869 145.08049,51.217428 Z"},
     {id:"#path1028",d:"M 156.63619,18.255249 162.12989,48.944168 143.94386,62.962568 Z"},
     {id:"#path1030",d:"M 138.82904,55.763928 143.94386,78.117598 125.5684,90.431048 Z"},
     {id:"#path1032",d:"M 130.30435,87.589488 137.50298,88.726108 143.94386,78.117598 Z"},
     {id:"#path1034",d:"M 75.177935,89.673298 59.833475,106.53327 85.407575,90.809928 Z"},
     {id:"#path1036",d:"M 125.5684,90.431048 150.95306,107.10158 137.50298,88.726108 Z"},
     {id:"#path1038",d:"M 105.67743,52.732928 98.099915,163.74349 85.407575,90.809928 Z"},
     {id:"#path1040",d:"M 105.67743,52.732928 125.5684,90.431048 113.44438,163.74349 Z"},
     {id:"#path1042",d:"M 105.67743,52.732928 98.099915,163.74349 105.23108,145.77956 Z"},
     {id:"#path1044",d:"M 105.67743,52.732928 105.23108,145.77956 113.44438,163.74349 Z"},
     {id:"#path1046",d:"M 87.817205,190.25188 105.23108,145.77956 106.5706,181.94681 Z"},
     {id:"#path1048",d:"M 105.23108,145.77956 105.0144,182.40311 123.20043,190.64366 Z"},
     {id:"#path1050",d:"M 89.575205,119.60448 72.904685,146.88352 93.932275,175.67807 Z"},
     {id:"#path1052",d:"M 121.02189,119.41504 138.63961,147.2624 117.23314,176.43582 Z"},
     {id:"#path1054",d:"M 117.23314,176.43582 138.63961,147.2624 120.64302,184.01333 Z"},
     {id:"#path1056",d:"M 130.87266,162.98574 146.97486,164.50124 122.91627,177.57245 Z"},
     {id:"#path1058",d:"M 133.90367,162.98574 156.82563,140.06376 146.97486,164.50124 Z"},
     {id:"#path1060",d:"M 90.522395,183.06614 72.904685,146.88352 93.932275,175.67807 Z"},
     {id:"#path1062",d:"M 87.491395,177.00413 63.622225,164.3118 80.103315,163.17517 Z"},
     {id:"#path1064",d:"M 63.622225,164.3118 54.339775,139.49545 77.261755,162.98574 Z"},
     {id:"#path1066",d:"M 99.425975,195.94792 106.5706,181.94681 111.92888,195.3796 Z"},
     {id:"#path1068",d:"M 111.92888,195.3796 117.23314,194.14826 108.61372,187.23378 Z"},
     {id:"#path1070",d:"M 117.23314,194.14826 123.20043,190.64366 108.61372,187.23378 Z"},
     {id:"#path1072",d:"M 99.425975,195.94792 94.405875,193.67466 103.78305,187.04434 Z"},
     {id:"#path1074",d:"M 94.405875,193.67466 87.817205,190.25188 103.78305,187.04434 Z"},
     {id:"#path1076",d:"M 94.405875,193.67466 97.626315,199.26308 105.86687,201.72577 Z"},
     {id:"#path1078",d:"M 117.23314,194.14826 113.63382,199.45252 105.86687,201.72577 Z"},
     {id:"#path1080",d:"M 59.833475,106.53327 76.967035,140.01959 85.407575,90.809928 Z"},
     {id:"#path1082",d:"M 125.5684,90.431048 134.56673,140.15355 150.95306,107.10158 Z"},
     {id:"#path1084",d:"M 54.529215,17.308059 67.553735,61.404968 65.946305,47.607838 Z"},
     {id:"#path1086",d:"M 156.63619,18.255249 145.08049,51.217428 143.94386,62.962568 Z"},
     {id:"#path1088",d:"M 105.23108,145.77956 102.78332,183.70385 108.94514,183.16804 Z"},
     {id:"#path1090",d:"M 106.5706,181.94681 123.20043,190.64366 106.48254,183.39766 Z"},
     {id:"#path1092",d:"M 106.48254,183.39766 87.817205,190.25188 105.0144,182.40311 Z"},
     {id:"#path1094",d:"M 121.02189,119.41504 113.44438,163.74349 117.23314,176.43582 Z"},
     {id:"#path1096",d:"M 89.575205,119.60448 93.932275,175.67807 98.094965,160.93188 Z"},
     {id:"#path1098",d:"M 85.407575,90.809928 104.2568,74.934198 105.67743,52.732928 Z"},
     {id:"#path1100",d:"M 107.47166,74.934198 125.5684,90.431048 105.67743,52.732928 Z"},
     {id:"#path1102",d:"M 71.957495,55.385058 99.994295,51.027988 106.05631,35.683528 Z"},
     {id:"#path1104",d:"M 111.36056,50.649108 138.82904,55.763928 106.05631,35.683528 Z"},
     {id:"#path1106",d:"M 134.42462,86.452858 136.65051,86.831728 138.68696,83.800728 Z"},
     {id:"#path1108",d:"M 73.245235,84.316478 75.588985,87.539138 77.200315,87.002028 Z"},
     {id:"#path1110",d:"M 68.850705,77.334058 81.155385,84.951248 68.391778,73.123155 Z"},
     {id:"#path1112",d:"M 130.56946,84.365308 143.06945,76.162188 142.23892,73.571088 Z"},
     {id:"#path1114",d:"M 68.657335,74.224938 69.485985,76.918018 77.012805,81.855328 Z"},
     {id:"#path1116",d:"M 69.071661,75.364318 69.969355,76.814438 72.524335,78.368138 Z"},
     {id:"#path1118",d:"M 135.22482,80.854058 142.0611,74.293988 143.06945,76.162188 Z"},
     {id:"#path1120",d:"M 138.2977,78.644348 141.99204,74.949988 142.47542,76.262008 Z"},
     {id:"#path1122",d:"M 141.92299,75.571478 141.05982,76.641798 142.47542,76.262008 Z"},
     {id:"#path1124",d:"M 72.354115,78.273998 73.025505,78.713458 72.488395,78.054278 Z"},
     {id:"#path1126",d:"M 104.31668,162.86909 102.78332,183.70385 105.0144,182.40311 Z"},
     {id:"#path1128",d:"M 104.68433,172.74836 102.737,183.66862 104.39758,181.53328 Z"},
     {id:"#path1130",d:"M 104.00696,179.77547 103.51867,182.02156 104.39758,181.53328 Z"},
     {id:"#path1132",d:"M 106.09124,161.61141 106.5706,181.94681 108.94514,183.16804 Z"},
     {id:"#path1134",d:"M 107.13196,171.67 106.5706,181.94681 108.94514,183.16804 Z"},
     {id:"#path1136",d:"M 105.76477,169.13093 105.0144,182.40311 108.30383,182.11922 Z"},
     {id:"#path1138",d:"M 107.13196,170.91041 104.20227,183.58406 108.30383,182.11922 Z"},
     {id:"#path1140",d:"M 105.86242,178.01766 105.0144,182.40311 108.30383,182.11922 Z"},
     {id:"#path1142",d:"M 106.15539,179.97078 105.0144,182.40311 108.30383,182.11922 Z"},
     {id:"#path1144",d:"M 106.35071,180.94734 105.0144,182.40311 107.81555,180.75203 Z"},
     {id:"#path1146",d:"M 105.15442,171.74324 103.71399,173.01277 105.03235,172.54891 Z"},
     {id:"#path1148",d:"M 76.467885,81.533278 77.957145,82.216868 76.882925,82.168048 Z"},
     {id:"#path1150",d:"M 70.901576,76.745386 69.347875,77.643078 76.467885,81.533278 Z"},
];
//end boar paths

//************************************ Transitions ************************************
var stagWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var stagBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var stagBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

var bullBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

// var animals = anime.timeline({ autoplay: true, direction: 'alternate', loop: false });

// var timeline = anime.timeline({ autoplay: false, direction: 'alternate', loop: true });
// paths.forEach(function(path, index) {
bPaths.forEach(function(path, index) {
 stagBull 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    // offset: 1000 + 10 * index
    offset:  5 * index
  });
});

wPaths.forEach(function(path, index) {
 stagWolf
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    // offset: 1000 + 10 * index
    offset:  5 * index
  });
});

baPaths.forEach(function(path, index) {
stagBoar 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    // offset: 1000 + 10 * index
    offset:  5 * index
  });
});

//WolfBull
wPaths.forEach(function(path, index) {
wolfBull 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


bPaths.forEach(function(path, index) {
wolfBull 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});

//BullWolf
bPaths.forEach(function(path, index) {
bullWolf 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


wPaths.forEach(function(path, index) {
bullWolf 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});

//bullBoar
bPaths.forEach(function(path, index) {
bullBoar 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


baPaths.forEach(function(path, index) {
bullBoar
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});


//boarBull
baPaths.forEach(function(path, index) {
boarBull 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


bPaths.forEach(function(path, index) {
boarBull
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});

//wolfBoar
wPaths.forEach(function(path, index) {
wolfBoar 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


baPaths.forEach(function(path, index) {
wolfBoar 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});


//boarWolf
baPaths.forEach(function(path, index) {
boarWolf 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});


wPaths.forEach(function(path, index) {
boarWolf 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
    // offset:  5 * index
  });
});

//0: Stag
//1: Wolf 
//2: Bull
//3: Boar
var currState = 0;
var changeState = function(nextState){
	if(currState != nextState){
		if(currState == 0){
			if(nextState == 1){
				stagWolf.restart();
				stagWolf.play();
			}
			else if(nextState == 2){
				stagBull.restart();
				stagBull.play();
			}
			else if(nextState == 3){
				stagBoar.restart();	
				stagBoar.play();	
			}
		}else if(currState == 1){
			if(nextState == 0){
				stagWolf.seek(1100);
				stagWolf.reverse();
				stagWolf.play();
			}
			else if(nextState == 2){
				wolfBull.seek(2500);
				wolfBull.play();
			}
			else if(nextState == 3){
				wolfBoar.seek(2500);
				wolfBoar.play();
			}
		}else if(currState == 2){
			if(nextState == 0){
				stagBull.seek(1100);
				stagBull.reverse();
				stagBull.play();
			}
			else if(nextState == 1){
				bullWolf.seek(2500);
				bullWolf.play();

			}
			else if(nextState == 3){
				bullBoar.seek(2500);
				bullBoar.play();
			}
		}else if(currState == 3){
			if(nextState == 0){
				stagBoar.seek(1100);
				stagBoar.reverse();
				stagBoar.play();
			}
			else if(nextState == 1){
				boarWolf.seek(2500);
				boarWolf.play();
			}
			else if(nextState == 2){
				boarBull.seek(2500);
				boarBull.play();
			}
		}
		currState = nextState;
	}
}
