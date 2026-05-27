# Method Name

Belongs to: [[Module/Module Note]]

---

# Overview

## Description

Provide a concise methodological description of the technique, including:

- what the method does,
- when it is typically used,
- its main advantages,
- and its primary limitations.

Prefer concise scientific descriptions (approximately 2–5 sentences).

---

## Typical Applications

Examples:

- Resting-state EEG
- ERP analysis
- Artifact removal
- Connectivity estimation
- Source localization
- Brain-computer interfaces (BCI)

---

# Algorithms / Variants

List major implementations, variants, or related methodological families.

Examples:

- FastICA
- Infomax ICA
- SOBI
- Wavelet Packet Decomposition
- Multitaper Spectral Estimation

---

# Key Parameters

List the most relevant practical parameters affecting methodological decisions.

| Parameter | Typical Values | Notes |
|---|---|---|
| | | |

Examples of relevant parameter types:
- filter bandwidth,
- epoch duration,
- number of components,
- regularization parameters,
- frequency ranges,
- window size,
- overlap,
- threshold criteria.

---

# Advantages

- Main methodological strengths
- Typical benefits in EEG workflows
- Situations where the method performs well

---

# Limitations

- Known constraints
- Assumptions
- Potential sources of bias
- Computational limitations
- Interpretation caveats

---

# Methodological Considerations

Describe important practical or theoretical considerations, such as:

- sensitivity to preprocessing choices,
- parameter dependencies,
- interaction with downstream analyses,
- reproducibility concerns,
- or methodological trade-offs.

---

# Connected Methods

Explicitly connect the note to related methods across the pipeline.

Connections may include:
- upstream dependencies,
- downstream implications,
- alternative approaches,
- complementary methods,
- or competing methodological strategies.

Examples:

- [[Preprocessing/Band-pass Filtering]] — influences spectral estimation stability
- [[Artifact Removal/ICA]] — commonly applied before this method
- [[Connectivity Analysis/PLV]] — alternative phase-based connectivity measure

---

# Typical Pipeline Position

Indicate where the method commonly appears within EEG workflows.

Example:

```text
Preprocessing → Artifact Removal → Spectral Analysis
```

---

# Common Pitfalls

List frequent methodological mistakes or interpretation issues.

Examples:
- inappropriate parameter selection,
- circular analysis,
- overfiltering,
- volume conduction effects,
- insufficient data length,
- overfitting.

---

# Software Ecosystem

List common software implementations when relevant.

Examples:
- MNE-Python
- EEGLAB
- Brainstorm
- FieldTrip
- SPM
- PyTorch / TensorFlow

---

# References

Prefer:
- seminal methodological papers,
- review articles,
- reproducibility-oriented references,
- and widely adopted implementations.

Format example:

- Author et al. (Year). *Title*. Journal. DOI:

---

# Tags

Examples:

```text
#eeg
#spectral-analysis
#connectivity
#wavelet
#artifact-removal
```

Use:
- lowercase tags,
- concise terminology,
- and consistent naming conventions.