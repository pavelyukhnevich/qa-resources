import { qrImage } from "./qr/index";

export const config = [
	{
		brand: "21.co.uk",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-21-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.image21Dev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-21-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.image21Dev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-21-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.image21Dev03,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "Pre-prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-21-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.image21PreProd01,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.21.co.uk",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.image21Prod01,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "BetUK",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetUKDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetUKDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetUKDev03,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "Pre-prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-pre-prod01.leo-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetUKPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.betuk.com/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetUKProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "BetMGM",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev03,
					},
				],
			},
			{
				name: "Dev04",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev04.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev04,
					},
				],
			},
			{
				name: "Dev05",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev05.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev05,
					},
				],
			},
			{
				name: "Dev06",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev06.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev06,
					},
				],
			},
			{
				name: "Dev07",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev07.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev07,
					},
				],
			},
			{
				name: "Dev08",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev08.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev08,
					},
				],
			},
			{
				name: "Dev09",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev09.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev09,
					},
				],
			},
			{
				name: "Dev10",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev10.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev10,
					},
				],
			},
			{
				name: "Dev11",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev11.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev11,
					},
				],
			},
			{
				name: "Dev12",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev12.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev12,
					},
				],
			},
			{
				name: "Dev13",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev13.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev13,
					},
				],
			},
			{
				name: "Dev14",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev14.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev14,
					},
				],
			},
			{
				name: "Dev15",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-dev15.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMDev15,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "SE-dev",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-se-dev01.leo-dev-brands.lvg-tech.net/",
					},
				],
			},
			{
				name: "BR-Stage01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMBRStage01,
					},
				],
			},
			{
				name: "BR-Stage02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMBRStage02,
					},
				],
			},
			{
				name: "BR-Stage03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betuk-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMBRStage03,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-stage-brazil-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-brazil-internal.leovegas.net:8443/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-brazil-internal.leovegas.net:8443/testapp/",
					},
				],
			},
			{
				name: "NL-Stage01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-mgm-nl-stage01.leo-stage-nl.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMNlStage01,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-mgm-nl-internal.leovegas.net:8443/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-mgm-nl-internal.leovegas.net:8443/testapp/",
					},
				],
			},
			{
				name: "PreProdUK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMUKPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "PreProdSE",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-se-pre-prod01.leo-brands.lvg-tech.net/",
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "PreProdBR",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMBrPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-prod01.leo-prod-brazil-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://brazil-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "PreProdNL",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-nl-pre-prod02.leo-prod-nl.lvg-tech.net/",
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://mgm-nl-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "ProdUK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.betmgm.co.uk",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMUKProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "ProdBR",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-betmgm-br-prod01.leo-prod-brazil-frontend.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMBRProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-prod01.leo-prod-brazil-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://brazil-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "ProdNL",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.betmgm.nl",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.BetMGMNLProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://mgm-nl-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "Expekt",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDev03,
					},
				],
			},
			{
				name: "Dev04",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-dev04.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDev04,
					},
				],
			},
			{
				name: "Dev05",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-dev05.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDev05,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "Pre-prod01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektPreProd01,
					},
				],
			},
			{
				name: "Pre-prod02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-expekt-pre-prod02.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektPreProd02,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.expekt.com",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.Expekt,
					},
				],
			},
			{
				name: "ProdSE",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.expekt.se",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektSE,
					},
				],
			},
			{
				name: "ProdDK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.expekt.dk",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.ExpektDK,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "GoGoCasino",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-gogocasino-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-gogocasino-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-gogocasino-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoDev03,
					},
				],
			},
			{
				name: "Dev04",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-gogocasino-dev04.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoDev04,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "PreProd",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-gogocasino-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.gogocasino.com/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.gogoProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "LeoVegas",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-dev01.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-dev02.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-dev03.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasDev03,
					},
				],
			},
			{
				name: "Dev04",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-dev04.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasDev04,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "DevDK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-dk-dev01.leo-dev-brands.lvg-tech.net/",
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "DevNL01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-nl-dev01.leo-dev-brands.lvg-tech.net/",
					},
				],
			},
			{
				name: "DevNL02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-nl-dev02.leo-dev-brands.lvg-tech.net/",
					},
				],
			},
			{
				name: "DevNL03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-nl-dev03.leo-dev-brands.lvg-tech.net/",
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "PreProdUK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasUKPreProd,
					},
				],

				extraLinks: [
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "PreProdNL",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-nl-pre-prod01.leo-prod-nl.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasNLPreProd,
					},
				],
				extraLinks: [
					{
						name: "Phoenix",
						url: "https://nl-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "PreProdDK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-leovegas-pre-prod02.leo-brands.lvg-tech.net/",
					},
				],
			},
			{
				name: "ProdUK",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.leovegas.co.uk/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasUKProd,
					},
				],
				extraLinks: [
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "ProdNL",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.leovegas.nl/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.leoVegasNLProd,
					},
				],
				extraLinks: [
					{
						name: "Phoenix",
						url: "https://nl-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "Pink Casino",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-pinkcasino-dev01.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.pinkCasinoDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-pinkcasino-dev02.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.pinkCasinoDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-pinkcasino-dev03.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.pinkCasinoDev03,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "PreProd",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-pinkcasino-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.pinkCasinoPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.pinkcasino.co.uk/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.pinkCasinoProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "Royal Panda",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-dev01.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-dev02.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-dev03.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaDev03,
					},
				],
			},
			{
				name: "Dev04",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-dev04.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaDev04,
					},
				],
			},
			{
				name: "Dev05",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-dev05.leo-dev-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaDev05,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "PreProd01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaPreProd01,
					},
				],
			},
			{
				name: "PreProd02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-royalpanda-pre-prod02.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaPreProd02,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.royalpanda.com/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.royalPandaProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
	{
		brand: "Slot Boss",
		envs: [
			{
				name: "Dev01",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-slotboss-dev01.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.slotBossDev01,
					},
				],
			},
			{
				name: "Dev02",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-slotboss-dev02.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.slotBossDev02,
					},
				],
			},
			{
				name: "Dev03",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-slotboss-dev03.leo-dev-brands.lvg-tech.net",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.slotBossDev03,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone-stage01.leo-dev-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://stage-malta-internal.leovegas.net/bo/",
					},
					{
						name: "Testapp",
						url: "https://stage-malta-internal.leovegas.net/testapp/",
					},
				],
			},
			{
				name: "PreProd(Internal)",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://bol-slotboss-pre-prod01.leo-brands.lvg-tech.net/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.slotBossPreProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
			{
				name: "Prod",
				links: [
					{
						type: "web",
						name: "webLink",
						url: "https://www.slotboss.co.uk/",
					},
					{
						type: "app",
						name: "appLink",
						qr: qrImage.slotBossProd,
					},
				],
				extraLinks: [
					{
						name: "Redstone",
						url: "https://redstone.leo-prod-common.lvg-tech.net/",
					},
					{
						name: "Phoenix",
						url: "https://malta-internal.leovegas.net:8443/bo/",
					},
				],
			},
		],
	},
];
