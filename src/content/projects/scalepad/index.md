---
title: "ScalePad"
summary: "Migrated ScalePad's marketing ecosystem from Webflow to a custom WordPress architecture, launching a major rebrand and optimizing conversion paths for SaaS demo acquisitions."
date: "Sep 05 2025"
draft: false
tags:
- WordPress
- HTML
- CSS
- JavaScript
demoUrl: https://www.scalepad.com/
projectColor: '#112D3C'
---

## Project Overview
ScalePad is a fast-growing SaaS company that needed to scale its marketing site into a high-performance, conversion-oriented platform. I led the front-end transition away from an unmaintainable Webflow setup into a highly structured, custom WordPress ecosystem on WPEngine. The mission was threefold: execute a comprehensive corporate rebrand, engineer a flexible publishing system for content authors, and aggressively optimize conversion paths to accelerate inbound SaaS demo signups.

- <b>My Role</b>: Front End Developer (UI Execution, Template Architecture, Analytics Integration)
- <b>The Stack</b>: WordPress, PHP, Oxygen Builder, Tailwind CSS, WPEngine

![Homepage](./img/scalepad_1.png)

### The Challenge
As ScalePad scaled into a multi-product SaaS ecosystem tailored for Managed Service Providers (MSPs), its legacy Webflow platform hit a critical ceiling. The marketing team was completely locked out of autonomous publishing, transforming the development queue into an operational bottleneck where even simple blog posts required manual developer intervention. Furthermore, the platform lacked the deep structural flexibility and plugin ecosystem necessary to support sophisticated marketing logic, advanced tracking frameworks, and dynamic layouts. 

The technical challenge was compounded by a high-stakes corporate rebrand. Because ScalePad offers multiple distinct software products, the new web architecture had to grant each product its own unique visual identity and landing experience, while strictly adhering to a unified, overarching corporate style guide. Executing this complex design system across seven high-traffic marketing surfaces under aggressive, non-negotiable deadlines required an architecture that was simultaneously rigid in its global brand rules but highly flexible in its modular layout options.

![Information](./img/scalepad_2.png)

### The Approach & UX Solution
To eliminate the content bottleneck and execute the multi-product rebrand smoothly, I engineered a highly structured, template-driven workflow that decoupled content creation from layout design.

- **Bulletproof Content Operations:** I established distinct WordPress Custom Post Types (CPTs) for Blogs, Product Updates, and News. Each CPT was bound to a locked-down, specialized template built within Oxygen. This allowed content writers to focus entirely on writing in a familiar environment without risk of breaking global layouts. For specialized layout requirements, I engineered custom, reusable modules featuring strict parameter controls—giving authors the flexibility to modify copy and select from predetermined brand colors while keeping the presentation layer completely on-brand.
- **Unified Design System & Global Variables:** To manage the aesthetic complexity of a multi-product SaaS suite, I mapped the design team's official color palettes and typographic scales directly into Oxygen’s global settings. This formed a centralized source of truth that guaranteed visual consistency across every product page. 
- **Rapid Hybrid Styling with Tailwind:** For bespoke marketing layouts and unique component demands, I heavily leveraged **Tailwind CSS**. Integrating Tailwind allowed me to rapidly assemble highly polished, modern front-end elements using utility classes, ensuring that layout grids, component spacing, and micro-interactions remained strictly uniform across all seven saved legacy pages.

![Form](./img/scalepad_3.png)

### Key Implementations & Web Inventions


<a href="/archive/sp/home/index.html" target="_blank" rel="noopener noreferrer">Visit Example Website</a>
