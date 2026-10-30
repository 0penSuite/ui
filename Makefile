COMPOSE = docker compose -f docker-compose.local.yml

.PHONY: help up down restart logs

# ── Aide ──────────────────────────────────────────────────────────────────────

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

# ── Raccourcis ────────────────────────────────────────────────────────────────

up: ## Démarre le catalogue
	$(COMPOSE) up -d

down: ## Arrête et supprime le conteneur
	$(COMPOSE) down

restart: down up ## Redémarre le catalogue

logs: ## Suit les journaux du serveur de dev Nuxt
	$(COMPOSE) logs -f nuxt-dev
