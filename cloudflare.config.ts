import { bindings, defineConfig, triggers } from "cf/config";

export default defineConfig({
	worker: {
		name: "feishu-playbook",
		compatibilityDate: "2026-07-10",
		entrypoint: "./src/index.ts",
		workersDev: true,
		observability: {
			enabled: true,
			headSamplingRate: 1,
		},
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "404-page",
			runWorkerFirst: [
				"/",
				"/assets/*",
				"/favicon.svg",
				"/hashmap.json",
				"/sitemap.xml",
				"/vp-icons.css",
			],
		},
		domains: [
			"feishu-playbook.chendahuang.top",
		],
		triggers: [
			triggers.fetch({
				pattern: "chendahuang.com/playbook/feishu",
				zone: "chendahuang.com",
			}),
			triggers.fetch({
				pattern: "chendahuang.com/playbook/feishu/*",
				zone: "chendahuang.com",
			}),
		],
		env: {
			ASSETS: bindings.assets(),
		},
	},
});
