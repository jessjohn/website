
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_config_save_dev: string;
	export const npm_config_legacy_bundling: string;
	export const npm_config_dry_run: string;
	export const npm_config_viewer: string;
	export const npm_config_only: string;
	export const npm_config_commit_hooks: string;
	export const npm_config_browser: string;
	export const npm_config_also: string;
	export const npm_package_deprecated: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const SSH_AGENT_PID: string;
	export const rvm_use_flag: string;
	export const npm_config_sign_git_commit: string;
	export const npm_config_rollback: string;
	export const npm_package_exports___vite_import: string;
	export const npm_package_exports___hooks_import: string;
	export const rvm_bin_path: string;
	export const NODE: string;
	export const npm_config_usage: string;
	export const npm_config_audit: string;
	export const npm_package_dependencies_sade: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies__types_marked: string;
	export const npm_package_homepage: string;
	export const rvm_quiet_flag: string;
	export const GEM_HOME: string;
	export const ANDROID_HOME: string;
	export const npm_config_globalignorefile: string;
	export const npm_package_devDependencies_vite: string;
	export const rvm_gemstone_url: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_config_shell: string;
	export const npm_config_maxsockets: string;
	export const npm_config_init_author_url: string;
	export const npm_package_dependencies_devalue: string;
	export const npm_config_shrinkwrap: string;
	export const npm_config_parseable: string;
	export const npm_config_metrics_registry: string;
	export const rvm_docs_type: string;
	export const IRBRC: string;
	export const TMPDIR: string;
	export const npm_config_timing: string;
	export const npm_config_init_license: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_if_present: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_config_sign_git_tag: string;
	export const npm_config_init_author_email: string;
	export const npm_config_cache_max: string;
	export const npm_config_preid: string;
	export const npm_config_long: string;
	export const npm_config_local_address: string;
	export const npm_config_git_tag_version: string;
	export const npm_config_cert: string;
	export const rvm_hook: string;
	export const MY_RUBY_HOME: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_registry: string;
	export const npm_config_noproxy: string;
	export const npm_config_fetch_retries: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_repository_url: string;
	export const LC_ALL: string;
	export const ZSH: string;
	export const npm_config_versions: string;
	export const npm_config_message: string;
	export const npm_config_key: string;
	export const npm_package_exports___node_import: string;
	export const npm_package_description: string;
	export const USER: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_dependencies_esm_env: string;
	export const npm_package_license: string;
	export const rvm_gemstone_package_file: string;
	export const LS_COLORS: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const npm_package_exports___import: string;
	export const npm_config_prefer_online: string;
	export const npm_config_logs_max: string;
	export const npm_config_always_auth: string;
	export const npm_package_repository_directory: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_bin_svelte_kit: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_config_global_style: string;
	export const npm_config_cache_lock_retries: string;
	export const npm_package_devDependencies__types_sade: string;
	export const rvm_proxy: string;
	export const npm_config_update_notifier: string;
	export const npm_config_cafile: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
	export const rvm_ruby_file: string;
	export const PAGER: string;
	export const FIG_JETBRAINS_SHELL_INTEGRATION: string;
	export const npm_config_heading: string;
	export const npm_config_audit_level: string;
	export const LSCOLORS: string;
	export const npm_config_searchlimit: string;
	export const npm_config_read_only: string;
	export const npm_config_offline: string;
	export const npm_config_fetch_retry_mintimeout: string;
	export const rvm_silent_flag: string;
	export const rvm_prefix: string;
	export const npm_config_json: string;
	export const npm_config_access: string;
	export const npm_config_argv: string;
	export const npm_package_scripts_postinstall: string;
	export const rvm_ruby_make: string;
	export const PATH: string;
	export const npm_config_allow_same_version: string;
	export const npm_package_devDependencies_rollup: string;
	export const npm_package_dependencies_magic_string: string;
	export const TERMINAL_EMULATOR: string;
	export const npm_config_https_proxy: string;
	export const npm_config_engine_strict: string;
	export const npm_config_description: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const npm_config_cidr: string;
	export const npm_package_devDependencies__types_mime: string;
	export const PWD: string;
	export const npm_config_user: string;
	export const npm_config_node_version: string;
	export const npm_package_bugs_url: string;
	export const npm_lifecycle_event: string;
	export const npm_config_save: string;
	export const npm_config_ignore_prepublish: string;
	export const npm_config_editor: string;
	export const npm_config_auth_type: string;
	export const npm_package_types: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_repository_type: string;
	export const npm_package_name: string;
	export const rvm_sdk: string;
	export const LANG: string;
	export const npm_config_tag: string;
	export const npm_config_script_shell: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_dependencies_mime: string;
	export const npm_config_progress: string;
	export const npm_config_global: string;
	export const npm_config_before: string;
	export const npm_package_bundleDependencies: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_package_exports___types: string;
	export const npm_config_searchstaleness: string;
	export const npm_config_optional: string;
	export const npm_config_ham_it_up: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const npm_package_devDependencies_vitest: string;
	export const XPC_FLAGS: string;
	export const npm_config_save_prod: string;
	export const npm_config_force: string;
	export const npm_config_bin_links: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_config_searchopts: string;
	export const npm_package_engines_node: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_config_node_gyp: string;
	export const npm_config_depth: string;
	export const npm_config_sso_poll_frequency: string;
	export const npm_config_rebuild_bundle: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_unicode: string;
	export const rvm_version: string;
	export const npm_package_dependencies_undici: string;
	export const npm_package_type: string;
	export const rvm_script_name: string;
	export const rvm_pretty_print_flag: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_config_fetch_retry_maxtimeout: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_check_all: string;
	export const rvm_ruby_mode: string;
	export const GOROOT: string;
	export const npm_config_tag_version_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_sso_type: string;
	export const npm_config_scripts_prepend_node_path: string;
	export const npm_config_save_prefix: string;
	export const npm_config_loglevel: string;
	export const npm_config_ca: string;
	export const npm_config_save_exact: string;
	export const npm_config_group: string;
	export const npm_config_fetch_retry_factor: string;
	export const npm_config_dev: string;
	export const npm_config_version: string;
	export const npm_config_prefer_offline: string;
	export const npm_config_cache_lock_stale: string;
	export const npm_config_otp: string;
	export const npm_config_cache_min: string;
	export const npm_config_searchexclude: string;
	export const npm_config_cache: string;
	export const npm_package_scripts_format: string;
	export const npm_package_peerDependencies_vite: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const npm_config_color: string;
	export const npm_package_peerDependencies_svelte: string;
	export const rvm_alias_expanded: string;
	export const npm_config_proxy: string;
	export const npm_config_package_lock: string;
	export const GEM_PATH: string;
	export const LC_CTYPE: string;
	export const npm_config_package_lock_only: string;
	export const npm_config_fund: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const npm_config_save_optional: string;
	export const GOPATH: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const npm_package_files_3: string;
	export const npm_package_dependencies__types_cookie: string;
	export const rvm_nightly_flag: string;
	export const npm_config_cache_lock_wait: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const rvm_ruby_make_install: string;
	export const npm_config_production: string;
	export const npm_package_files_1: string;
	export const rvm_niceness: string;
	export const npm_config_send_metrics: string;
	export const npm_config_save_bundle: string;
	export const npm_package_files_0: string;
	export const rvm_ruby_bits: string;
	export const npm_config_umask: string;
	export const npm_config_node_options: string;
	export const npm_config_init_version: string;
	export const npm_package_dependencies_kleur: string;
	export const rvm_bin_flag: string;
	export const TOOLBOX_VERSION: string;
	export const npm_config_init_author_name: string;
	export const npm_config_git: string;
	export const npm_config_scope: string;
	export const npm_package_files_6: string;
	export const rvm_only_path_flag: string;
	export const RUBY_VERSION: string;
	export const npm_config_unsafe_perm: string;
	export const npm_config_tmp: string;
	export const npm_config_onload_script: string;
	export const npm_package_scripts_check: string;
	export const npm_package_files_5: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const npm_config_link: string;
	export const npm_config_format_package_lock: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_files_4: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_config_save_dev: string;
		npm_config_legacy_bundling: string;
		npm_config_dry_run: string;
		npm_config_viewer: string;
		npm_config_only: string;
		npm_config_commit_hooks: string;
		npm_config_browser: string;
		npm_config_also: string;
		npm_package_deprecated: string;
		npm_package_scripts_test_cross_platform_build: string;
		SSH_AGENT_PID: string;
		rvm_use_flag: string;
		npm_config_sign_git_commit: string;
		npm_config_rollback: string;
		npm_package_exports___vite_import: string;
		npm_package_exports___hooks_import: string;
		rvm_bin_path: string;
		NODE: string;
		npm_config_usage: string;
		npm_config_audit: string;
		npm_package_dependencies_sade: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies__types_marked: string;
		npm_package_homepage: string;
		rvm_quiet_flag: string;
		GEM_HOME: string;
		ANDROID_HOME: string;
		npm_config_globalignorefile: string;
		npm_package_devDependencies_vite: string;
		rvm_gemstone_url: string;
		TERM: string;
		SHELL: string;
		npm_config_shell: string;
		npm_config_maxsockets: string;
		npm_config_init_author_url: string;
		npm_package_dependencies_devalue: string;
		npm_config_shrinkwrap: string;
		npm_config_parseable: string;
		npm_config_metrics_registry: string;
		rvm_docs_type: string;
		IRBRC: string;
		TMPDIR: string;
		npm_config_timing: string;
		npm_config_init_license: string;
		npm_package_scripts_lint: string;
		npm_config_if_present: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies_cookie: string;
		npm_config_sign_git_tag: string;
		npm_config_init_author_email: string;
		npm_config_cache_max: string;
		npm_config_preid: string;
		npm_config_long: string;
		npm_config_local_address: string;
		npm_config_git_tag_version: string;
		npm_config_cert: string;
		rvm_hook: string;
		MY_RUBY_HOME: string;
		TERM_SESSION_ID: string;
		npm_config_registry: string;
		npm_config_noproxy: string;
		npm_config_fetch_retries: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_repository_url: string;
		LC_ALL: string;
		ZSH: string;
		npm_config_versions: string;
		npm_config_message: string;
		npm_config_key: string;
		npm_package_exports___node_import: string;
		npm_package_description: string;
		USER: string;
		npm_package_exports___package_json: string;
		npm_package_dependencies_esm_env: string;
		npm_package_license: string;
		rvm_gemstone_package_file: string;
		LS_COLORS: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		npm_package_exports___import: string;
		npm_config_prefer_online: string;
		npm_config_logs_max: string;
		npm_config_always_auth: string;
		npm_package_repository_directory: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		npm_package_bin_svelte_kit: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_config_global_style: string;
		npm_config_cache_lock_retries: string;
		npm_package_devDependencies__types_sade: string;
		rvm_proxy: string;
		npm_config_update_notifier: string;
		npm_config_cafile: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
		rvm_ruby_file: string;
		PAGER: string;
		FIG_JETBRAINS_SHELL_INTEGRATION: string;
		npm_config_heading: string;
		npm_config_audit_level: string;
		LSCOLORS: string;
		npm_config_searchlimit: string;
		npm_config_read_only: string;
		npm_config_offline: string;
		npm_config_fetch_retry_mintimeout: string;
		rvm_silent_flag: string;
		rvm_prefix: string;
		npm_config_json: string;
		npm_config_access: string;
		npm_config_argv: string;
		npm_package_scripts_postinstall: string;
		rvm_ruby_make: string;
		PATH: string;
		npm_config_allow_same_version: string;
		npm_package_devDependencies_rollup: string;
		npm_package_dependencies_magic_string: string;
		TERMINAL_EMULATOR: string;
		npm_config_https_proxy: string;
		npm_config_engine_strict: string;
		npm_config_description: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		npm_config_cidr: string;
		npm_package_devDependencies__types_mime: string;
		PWD: string;
		npm_config_user: string;
		npm_config_node_version: string;
		npm_package_bugs_url: string;
		npm_lifecycle_event: string;
		npm_config_save: string;
		npm_config_ignore_prepublish: string;
		npm_config_editor: string;
		npm_config_auth_type: string;
		npm_package_types: string;
		npm_package_devDependencies_marked: string;
		npm_package_repository_type: string;
		npm_package_name: string;
		rvm_sdk: string;
		LANG: string;
		npm_config_tag: string;
		npm_config_script_shell: string;
		npm_package_scripts_test_integration: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_dependencies_mime: string;
		npm_config_progress: string;
		npm_config_global: string;
		npm_config_before: string;
		npm_package_bundleDependencies: string;
		npm_package_exports___node_polyfills_import: string;
		npm_package_exports___types: string;
		npm_config_searchstaleness: string;
		npm_config_optional: string;
		npm_config_ham_it_up: string;
		npm_package_scripts_test_cross_platform_dev: string;
		npm_package_devDependencies_vitest: string;
		XPC_FLAGS: string;
		npm_config_save_prod: string;
		npm_config_force: string;
		npm_config_bin_links: string;
		npm_package_dependencies_tiny_glob: string;
		npm_config_searchopts: string;
		npm_package_engines_node: string;
		npm_package_dependencies_sirv: string;
		npm_config_node_gyp: string;
		npm_config_depth: string;
		npm_config_sso_poll_frequency: string;
		npm_config_rebuild_bundle: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		npm_config_unicode: string;
		rvm_version: string;
		npm_package_dependencies_undici: string;
		npm_package_type: string;
		rvm_script_name: string;
		rvm_pretty_print_flag: string;
		SHLVL: string;
		HOME: string;
		npm_config_fetch_retry_maxtimeout: string;
		npm_package_scripts_test: string;
		npm_package_scripts_check_all: string;
		rvm_ruby_mode: string;
		GOROOT: string;
		npm_config_tag_version_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_sso_type: string;
		npm_config_scripts_prepend_node_path: string;
		npm_config_save_prefix: string;
		npm_config_loglevel: string;
		npm_config_ca: string;
		npm_config_save_exact: string;
		npm_config_group: string;
		npm_config_fetch_retry_factor: string;
		npm_config_dev: string;
		npm_config_version: string;
		npm_config_prefer_offline: string;
		npm_config_cache_lock_stale: string;
		npm_config_otp: string;
		npm_config_cache_min: string;
		npm_config_searchexclude: string;
		npm_config_cache: string;
		npm_package_scripts_format: string;
		npm_package_peerDependencies_vite: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		npm_config_color: string;
		npm_package_peerDependencies_svelte: string;
		rvm_alias_expanded: string;
		npm_config_proxy: string;
		npm_config_package_lock: string;
		GEM_PATH: string;
		LC_CTYPE: string;
		npm_config_package_lock_only: string;
		npm_config_fund: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		npm_config_save_optional: string;
		GOPATH: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		npm_package_files_3: string;
		npm_package_dependencies__types_cookie: string;
		rvm_nightly_flag: string;
		npm_config_cache_lock_wait: string;
		npm_package_files_2: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__playwright_test: string;
		rvm_ruby_make_install: string;
		npm_config_production: string;
		npm_package_files_1: string;
		rvm_niceness: string;
		npm_config_send_metrics: string;
		npm_config_save_bundle: string;
		npm_package_files_0: string;
		rvm_ruby_bits: string;
		npm_config_umask: string;
		npm_config_node_options: string;
		npm_config_init_version: string;
		npm_package_dependencies_kleur: string;
		rvm_bin_flag: string;
		TOOLBOX_VERSION: string;
		npm_config_init_author_name: string;
		npm_config_git: string;
		npm_config_scope: string;
		npm_package_files_6: string;
		rvm_only_path_flag: string;
		RUBY_VERSION: string;
		npm_config_unsafe_perm: string;
		npm_config_tmp: string;
		npm_config_onload_script: string;
		npm_package_scripts_check: string;
		npm_package_files_5: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		npm_config_link: string;
		npm_config_format_package_lock: string;
		npm_package_scripts_test_unit: string;
		npm_package_files_4: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
