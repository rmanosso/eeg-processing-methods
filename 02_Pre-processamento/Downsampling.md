# Downsampling

← [[02_Pre-processamento/Pre-processamento]]

## Parâmetros
Fator 2–8 · Frequência alvo comum: 250 ou 256 Hz

## Descrição
Reduz custo computacional. Aplicar low-pass antes para evitar aliasing. Preservar resolução temporal adequada à análise de interesse.

## Tags
`decimação` · `interpolação` · `antialiasing`

## Conectado a
- [[01_Aquisicao/Taxa de Amostragem]] — fs original determina o fator possível
- [[02_Pre-processamento/Filtragem Passa-Banda]] — low-pass deve preceder o downsampling

#EEG #pre-processamento #parametro
