# Filtragem Passa-Banda

← [[02_Pre-processamento/Pre-processamento]]

## Parâmetros típicos
High-pass: 0.1–1 Hz · Low-pass: 40–100 Hz

## Descrição
High-pass remove deriva DC; low-pass remove ruído muscular. FIR de fase linear é preferível a IIR quando a latência é crítica.

## Tags
`FIR` · `IIR` · `Butterworth` · `Chebyshev` · `ordem do filtro`

## Conectado a
- [[01_Aquisicao/Filtro Anti-aliasing Hardware]] — complementa filtragem analógica
- [[03_Remocao_de_Artefatos/ICA]] — qualidade da filtragem afeta decomposição ICA
- [[04_Segmentacao/Epoching Orientado a Evento]] — baseline exige filtro adequado

#EEG #pre-processamento #filtragem
