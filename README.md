# 🧠 EEG Processing Methods — Knowledge Vault

> A structured and navigable knowledge graph of EEG signal processing methods, organized as an Obsidian vault and published as an interactive website via Quartz.

[![Obsidian](https://img.shields.io/badge/Obsidian-compatible-7F77DD?logo=obsidian&logoColor=white)](https://obsidian.md)
[![Quartz](https://img.shields.io/badge/Quartz-v4-1D9E75)](https://quartz.jzhao.xyz)
[![License](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey)](LICENSE)
[![Status](https://img.shields.io/badge/status-in%20development-orange)]()
[![Open Science](https://img.shields.io/badge/Open%20Science-EEG-blue)]()

---

## Overview

This repository is a **knowledge vault** mapping the methodological landscape of EEG signal processing — from signal acquisition to machine learning and source-level analysis.

Each method is represented as an independent note containing:
- conceptual explanations,
- methodological considerations,
- key parameters,
- practical implications,
- and explicit links to related methods across the pipeline.

Rather than presenting EEG preprocessing as a rigid linear workflow, this project models it as an interconnected decision space in which methodological choices influence downstream analyses in non-trivial ways.

The project is designed both as:

- **An educational resource** for students and researchers navigating EEG methodology;
- **An open-science infrastructure** for reproducible and transparent methodological organization;
- **A living methodological map** with the long-term goal of supporting formal review publications and comparative methodological studies.

---

## Why this project exists

EEG preprocessing and analysis pipelines involve a large number of methodological choices, many of which interact in complex and often underreported ways.

Different preprocessing decisions may substantially affect:
- spectral estimates,
- connectivity metrics,
- source localization,
- machine learning performance,
- and reproducibility outcomes.

This project aims to organize these methodological pathways as a navigable knowledge graph, enabling:

- methodological transparency,
- educational exploration,
- comparative reasoning,
- reproducibility-oriented workflows,
- and structured scientific documentation.

---

## Interactive Website

🌐 **Live website:**  
https://github.com/rmanosso/eeg-processing-methods

The Quartz-generated website includes:

- Interactive graph visualization
- Automatic backlinks between methods
- Full-text search
- Tag-based navigation
- Bidirectional knowledge navigation
- Browser-based exploration of the methodological graph

---

## Pipeline Coverage

```text
Signal Acquisition
        ↓
Preprocessing
        ↓
Artifact Removal
        ↓
Segmentation / Epoching
        ↓
Spectral & Temporal Analysis
        ↓
Connectivity Analysis
        ↓
Components & Source Localization
        ↓
Feature Extraction
        ↓
Machine Learning
```

---

## Repository Structure

The vault currently contains **54 interconnected notes** organized into 8 major modules.

| # | Module | Covered Topics |
|---|---|---|
| 01 | Acquisition & Recording Setup | Sampling rate, electrode referencing, electrode placement systems, impedance, anti-aliasing |
| 02 | Preprocessing | Band-pass filtering, notch/ZapLine, rereferencing, downsampling, bad channel detection |
| 03 | Artifact Removal | ICA, ASR, EOG/ECG regression, threshold rejection, DSS, wavelet denoising |
| 04 | Segmentation & Epoching | ERP event-based epoching, resting-state segmentation, adaptive segmentation, EEG microstates |
| 05 | Spectral Analysis | FFT/Welch, classical frequency bands, wavelet CWT/DWT, STFT, Hilbert transform, multitaper DPSS, EMD/CEEMDAN |
| 06 | Connectivity Analysis | COH/iCOH, PLV/PLI/wPLI, Granger causality, graph analysis, PAC, envelope correlation |
| 07 | Components & Source Localization | ICA components, PCA, inverse problem, LORETA/sLORETA, beamforming LCMV/DICS, MNE/dSPM |
| 08 | Machine Learning | Spectral features, CSP/FBCSP, Riemannian covariance methods, ERP-based features, CNN/LSTM/Transformer, SVM/LDA/RF |

Recommended entry point:

```text
MOC/Pipeline EEG.md
```

---

## Using the Vault

## Option 1 — Obsidian (recommended)

Clone the repository:

```bash
git clone https://github.com/rmanosso/eeg-processing-methods.git
```

Open Obsidian and select:

```text
Open folder as vault
```

Then:

1. Open the repository folder;
2. Enable Graph View (`Ctrl+G` / `Cmd+G`);
3. Start from:

```text
MOC/Pipeline EEG.md
```

### Recommended Obsidian Plugins

| Plugin | Purpose |
|---|---|
| Dataview | Dynamic metadata and tag queries |
| Graph Analysis | Centrality and graph metrics |
| Tag Wrangler | Tag management and renaming |

---

## Option 2 — Quartz Website

Access the public website directly:

```text
https://github.com/rmanosso/eeg-processing-methods
```

To run Quartz locally:

```bash
npm install
npx quartz build --serve
```

Local server:

```text
http://localhost:8080
```

---

## Contributing

Contributions are welcome.

Possible contribution types include:

- Adding new EEG processing methods;
- Improving methodological descriptions;
- Expanding parameter discussions;
- Adding bibliographic references;
- Improving cross-links between notes;
- Reporting inconsistencies or ambiguities.

Please read:

```text
CONTRIBUTING.md
```

before opening a Pull Request.

---

## Roadmap

- [ ] Add bibliographic references to all notes
- [ ] Include Python snippets (MNE-Python / EEGLAB workflows)
- [ ] Add software ecosystem notes (MNE-Python, EEGLAB, Brainstorm, FieldTrip)
- [ ] Expand Machine Learning section with AutoML and transfer learning
- [ ] Add BIDS-oriented organizational workflows
- [ ] Create methodological comparison maps
- [ ] Publish formal methodological review based on the vault

---

## Author

Rodrigo Manosso

Research and methodological development in:
- EEG signal processing
- computational neuroscience
- methodological workflows
- open-science knowledge systems

ORCID: https://orcid.org/0009-0000-8236-4008

---

## Citation

If this resource contributes to your work, please consider citing:

```bibtex
@misc{manosso2025eegvault,
  author       = {Rodrigo Manosso},
  title        = {EEG Processing Methods — Knowledge Vault},
  year         = {2025},
  publisher    = {GitHub},
  url          = {https://github.com/rmanosso/eeg-processing-methods}
}
```

A formal publication associated with this repository is currently in preparation.

---

## License

This project is licensed under the:

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

You are free to:
- share,
- adapt,
- remix,
- and redistribute the material for any purpose, including commercial use,

provided that appropriate attribution is given.

For full license details, see:

```text
LICENSE
```

---

## Acknowledgments

Built with:

- Obsidian
- Quartz
- Open-science principles
- Knowledge graph methodology
- EEG methodological research

---

<p align="center">
  Built with <a href="https://obsidian.md">Obsidian</a> + <a href="https://quartz.jzhao.xyz">Quartz</a>
</p>