# Taxa de Amostragem

← [[01_Aquisicao/Aquisicao e Configuracao]]

## Valores comuns
128 · 256 · 512 · 1024 · 2048 Hz

## Descrição
Define a resolução temporal. Nyquist: fs ≥ 2× frequência máxima de interesse. Para gama-alto (>80 Hz) usar ≥512 Hz.

## Tags
`Nyquist` · `aliasing` · `resolução temporal`

## Conectado a
- [[02_Pre-processamento/Downsampling]] — frequência alvo após decimação
- [[05_Analise_Espectral/FFT e PSD Welch]] — resolução espectral depende de fs
- [[01_Aquisicao/Filtro Anti-aliasing Hardware]] — corte configurado em relação a fs

#EEG #aquisicao #parametro
