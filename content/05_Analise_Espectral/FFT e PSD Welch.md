# FFT / PSD (Welch)

← [[05_Analise_Espectral/Analise Espectral]]

## Parâmetros
Janela: Hann, Hamming · nperseg · overlap · scaling

## Descrição
Estimativa de densidade espectral de potência. Welch (média de segmentos sobrepostos) é mais robusto que FFT simples. nperseg controla resolução em Hz; noverlap controla estabilidade.

## Tags
`Welch` · `Hann` · `resolução Hz` · `dB` · `µV²/Hz`

## Conectado a
- [[01_Aquisicao/Taxa de Amostragem]] — fs determina resolução e faixa disponível
- [[04_Segmentacao/Epoching Continuo Resting State]] — duração da janela afeta resolução espectral
- [[05_Analise_Espectral/Bandas Classicas]] — PSD é base para extração de potência por banda
- [[08_Machine_Learning/Features Espectrais]] — PSD por banda como input de ML

#EEG #espectral #FFT
