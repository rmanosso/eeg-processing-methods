# Contributing Guide

Thank you for your interest in contributing to the **EEG Processing Methods — Knowledge Vault**.

This project aims to organize EEG signal processing methodologies as an interconnected and navigable knowledge graph focused on:
- methodological clarity,
- reproducibility,
- scientific transparency,
- and open-science documentation.

Contributions of all sizes are welcome.

---

# Before Contributing

Before opening a Pull Request, please:

- Read the [README](README.md) to understand the project structure and goals;
- Verify whether the method or concept already exists in the vault;
- Search both the Obsidian vault and the Quartz website when possible;
- Open an Issue first for large structural or organizational changes.

---

# Types of Contributions

Examples of valuable contributions include:

- Adding new EEG processing methods;
- Expanding methodological explanations;
- Improving parameter discussions;
- Adding bibliographic references;
- Improving internal links between notes;
- Correcting inaccuracies or ambiguities;
- Expanding connectivity between methodological stages;
- Improving organizational consistency.

---

# Adding a New Note

## 1. Fork the repository and create a descriptive branch

```bash
git checkout -b add/method-name
```

Examples:

```bash
git checkout -b add/wavelet-denoising
git checkout -b add/phase-amplitude-coupling
```

---

## 2. Copy the template

Use:

```text
TEMPLATE.md
```

and place the new note inside the corresponding module directory.

Example:

```text
05_Spectral_Analysis/Wavelet Denoising.md
```

---

## 3. Fill all template sections

Please complete all relevant sections, especially:

- conceptual description,
- methodological considerations,
- typical parameters,
- advantages and limitations,
- and internal links (`[[...]]`) to related methods.

The vault is intended to function as a connected methodological graph rather than a collection of isolated notes.

---

## 4. Update the corresponding index/MOC note

Add the new note to the appropriate module index.

Example:

```text
05_Spectral_Analysis/Spectral Analysis.md
```

---

## 5. Open a Pull Request

Provide:
- a clear summary of the contribution,
- the motivation for adding the method,
- and relevant references when applicable.

---

# Writing Style

The project prioritizes:

- concise scientific descriptions,
- methodological clarity,
- explicit relationships between methods,
- reproducibility-oriented documentation,
- and graph-based knowledge navigation.

Notes should focus on methodological understanding rather than tutorial-style instruction.

---

# Internal Linking

Whenever possible, notes should explicitly reference:

- upstream methodological dependencies,
- downstream analytical implications,
- alternative approaches,
- related methodological families,
- and common methodological trade-offs.

Internal links should use Obsidian wiki-link syntax:

```text
[[Folder/Note Name]]
```

Prefer explicit and meaningful cross-linking.

---

# Naming Conventions

## File Names

- Use English names whenever possible;
- Avoid accents and special characters;
- Use standard spaces between words.

Examples:

```text
Spectral Analysis.md
Wavelet Denoising.md
Phase Amplitude Coupling.md
```

---

## Tags

Tags should:

- be written in lowercase,
- remain concise,
- and follow consistent terminology.

Examples:

```text
#eeg
#spectral-analysis
#wavelet
#connectivity
```

---

## Descriptions

Descriptions should generally:

- remain concise (2–5 sentences),
- prioritize methodological meaning,
- avoid excessive implementation detail,
- and maintain scientific objectivity.

---

# Scientific References

Whenever possible:

- prioritize peer-reviewed literature,
- include seminal methodological papers,
- and avoid unsupported claims or purely anecdotal recommendations.

---

# What Should NOT Be Included

Please avoid:

- software tutorials unrelated to methodology;
- extensive source code blocks;
- unsupported methodological claims;
- purely opinion-based recommendations;
- disconnected or isolated notes without graph integration.

Short illustrative snippets are acceptable when they improve methodological understanding.

---

# Language Policy

The repository is progressively transitioning toward English standardization.

Some notes may still temporarily exist in Portuguese during this transition phase.

Future contributions should preferably be written in English whenever possible.

---

# Questions and Discussions

If you have:
- questions,
- methodological suggestions,
- organizational ideas,
- or proposals for structural improvements,

please open an Issue using the appropriate label.

Examples:

```text
question
enhancement
methodology
documentation
```

---

# Project Philosophy

This repository is not intended to be merely a static collection of notes.

The long-term goal is to build:
- a navigable methodological knowledge graph,
- a reproducibility-oriented EEG methodology resource,
- and an open-science infrastructure for comparative methodological reasoning.

Contributions that improve connectivity, clarity, and methodological transparency are especially valuable.