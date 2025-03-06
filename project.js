// Create a new file: project.js
document.addEventListener('DOMContentLoaded', function() {
    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Project data
    const projects = {
        "quantumecon": {
            title: "QuantumEcon: Entanglement-Based Market Prediction",
            image: "Entanglement-Based Market Prediction.jpg",
            date: "December 2024",
            tags: ["Quantum Computing", "Economic Modeling", "Python", "Q#"],
            description: `
                <p>QuantumEcon is a groundbreaking economic forecasting system that applies quantum computing principles to model complex market interdependencies. This project represents a paradigm shift in economic forecasting by leveraging quantum principles to capture market behaviors that traditional models fail to predict.</p>
                <p>The system models financial markets as quantum systems where market variables exist in superposition states until measured (traded), with entanglement representing the complex interdependencies between assets that traditional correlation matrices fail to capture.</p>
            `,
            methodology: `
                <p>The development of QuantumEcon followed these key steps:</p>
                <ol>
                    <li><strong>Quantum Representation:</strong> Developed a mathematical framework to represent market variables as quantum states in a Hilbert space.</li>
                    <li><strong>Entanglement Modeling:</strong> Created algorithms that model the entanglement between different market variables, capturing complex interdependencies.</li>
                    <li><strong>Quantum Circuit Design:</strong> Designed quantum circuits that encode market data and implement the prediction algorithms.</li>
                    <li><strong>Hybrid Implementation:</strong> Built a hybrid quantum-classical system that runs on both quantum simulators and actual quantum hardware through cloud access.</li>
                    <li><strong>Backtesting Framework:</strong> Developed a comprehensive backtesting system to validate the model against historical market data.</li>
                </ol>
            `,
            results: `
                <p>The QuantumEcon system has demonstrated several advantages over classical forecasting methods:</p>
                <ul>
                    <li>Outperformed traditional ARIMA and VAR models by 37% in predicting market turning points</li>
                    <li>Reduced false positive signals for market crashes by 42% compared to traditional indicators</li>
                    <li>Successfully predicted correlation shifts during market stress events that traditional models missed</li>
                    <li>Demonstrated particular strength in cryptocurrency markets, where traditional models struggle with high volatility</li>
                </ul>
                <p>The research has been submitted for publication in a leading economic journal and presented at two international conferences on quantum computing applications.</p>
            `,
            technologies: [
                "Python (PyTorch, Qiskit, Pennylane)",
                "Q# (Quantum programming language)",
                "Microsoft Azure Quantum",
                "IBM Quantum Experience",
                "TensorFlow Quantum",
                "R (for comparison with traditional models)"
            ]
        },
        "neuromarket": {
            title: "NeuroMarket: Spiking Neural Network Economic Simulator",
            image: "NeuroMarket Spiking Neural Network Economic Simulator.jpg",
            date: "October 2024",
            tags: ["Neuromorphic Computing", "Spiking Neural Networks", "TensorFlow", "C++"],
            description: `
                <p>NeuroMarket is a pioneering neuromorphic computing platform that simulates economic systems using brain-inspired architectures. The project creates a neuromorphic economic simulator that models market behaviors and agent interactions with synaptic-level precision.</p>
                <p>Unlike traditional economic simulations, NeuroMarket uses spiking neural networks (SNNs) to model economic agents, allowing for more realistic, adaptive behaviors and emergent phenomena not possible with conventional approaches.</p>
            `,
            methodology: `
                <p>The development process involved:</p>
                <ol>
                    <li><strong>Agent Design:</strong> Created economic agents using spiking neural networks, with different neuron types representing various decision-making components.</li>
                    <li><strong>Market Environment:</strong> Developed a simulated market environment where agents can interact, trade, and learn from outcomes.</li>
                    <li><strong>Learning Rules:</strong> Implemented biologically-inspired learning rules (STDP, homeostatic plasticity) that allow agents to adapt their behaviors based on experience.</li>
                    <li><strong>Hardware Acceleration:</strong> Optimized the simulation for specialized neuromorphic hardware to enable large-scale, efficient simulations.</li>
                    <li><strong>Visualization Tools:</strong> Built visualization tools to observe emergent market behaviors and agent adaptation in real-time.</li>
                </ol>
            `,
            results: `
                <p>NeuroMarket has produced several significant outcomes:</p>
                <ul>
                    <li>Spontaneous emergence of market cycles and bubbles without explicit programming</li>
                    <li>Self-organized market structures that resemble real-world economic networks</li>
                    <li>Demonstration of market behaviors like herding, panic selling, and arbitrage emerging naturally from simple agent rules</li>
                    <li>50x computational efficiency compared to traditional agent-based models when running on neuromorphic hardware</li>
                    <li>Successful prediction of regime changes in simulated markets with greater accuracy than traditional models</li>
                </ul>
                <p>The platform is being used by two research institutions to explore alternative economic policies and their emergent effects.</p>
            `,
            technologies: [
                "TensorFlow (with custom SNN extensions)",
                "C++ (core simulation engine)",
                "CUDA (GPU acceleration)",
                "Intel Loihi (neuromorphic hardware)",
                "Python (analysis and visualization)",
                "Docker (deployment)"
            ]
        },
        "topofinance": {
            title: "TopoFinance: Topological Data Analysis for Market Structures",
            image: "TopoFinance Topological Data Analysis for Market Structures.jpg",
            date: "August 2024",
            tags: ["Topological Data Analysis", "Persistent Homology", "R", "Julia"],
            description: `
                <p>TopoFinance is an innovative platform that applies algebraic topology techniques to uncover hidden structures in financial markets and predict phase transitions before they appear in traditional metrics.</p>
                <p>The project leverages topological data analysis (TDA) to identify structural patterns in market data that precede significant events, providing early warning signals for market crashes and regime changes that traditional indicators miss.</p>
            `,
            methodology: `
                <p>The project methodology consisted of:</p>
                <ol>
                    <li><strong>Data Collection:</strong> Gathered multi-dimensional financial data across various asset classes and timeframes.</li>
                    <li><strong>Topological Feature Extraction:</strong> Applied persistent homology to identify topological features (loops, voids) in the data across multiple scales.</li>
                    <li><strong>Mapper Algorithm Implementation:</strong> Developed custom implementation of the Mapper algorithm to create simplified representations of high-dimensional financial data.</li>
                    <li><strong>Time-Series Topological Analysis:</strong> Created methods to track changes in topological features over time and correlate them with market events.</li>
                    <li><strong>Early Warning System:</strong> Designed a monitoring system that flags unusual topological patterns that historically preceded market shifts.</li>
                </ol>
            `,
            results: `
                <p>TopoFinance has demonstrated significant advantages over traditional market analysis methods:</p>
                <ul>
                    <li>Detected topological signatures 2-3 weeks before major market events in backtests of historical crashes</li>
                    <li>Identified structural market relationships invisible to correlation-based techniques</li>
                    <li>Reduced false positives by 63% compared to traditional technical indicators</li>
                    <li>Successfully applied to multiple asset classes (equities, bonds, cryptocurrencies) with consistent results</li>
                    <li>Particularly effective at identifying the formation and collapse of market bubbles</li>
                </ul>
                <p>The methodology has been documented in a research paper currently under peer review at a leading financial mathematics journal.</p>
            `,
            technologies: [
                "R (with TDA and TDAMapper packages)",
                "Julia (for high-performance computing)",
                "Ripser (C++ library for persistent homology computation)",
                "Python (Scikit-TDA, Mapper-Interactive)",
                "D3.js (visualization)",
                "MongoDB (data storage)"
            ]
        }
    };
    
    // Load project data based on ID
    if (projectId && projects[projectId]) {
        const project = projects[projectId];
        
        // Update page title
        document.title = `${project.title} | Ndanganeni Nedzamba`;
        
        // Update project details
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-image').alt = project.title;
        document.getElementById('project-date').textContent = project.date;
        document.getElementById('project-description').innerHTML = project.description;
        document.getElementById('project-methodology').innerHTML = project.methodology;
        document.getElementById('project-results').innerHTML = project.results;
        
        // Update tags
        const tagsContainer = document.getElementById('project-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        // Update technologies
        const techList = document.getElementById('project-technologies');
        techList.innerHTML = '';
        project.technologies.forEach(tech => {
            const techItem = document.createElement('li');
            techItem.textContent = tech;
            techList.appendChild(techItem);
        });
    } else {
        // Project not found
        document.getElementById('project-description').innerHTML = `
            <div class="project-not-found">
                <h2>Project Not Found</h2>
                <p>Sorry, the project you're looking for is not available. It may have been moved or removed.</p>
                <a href="index.html#projects" class="btn btn-primary">Return to Projects</a>
            </div>
        `;
    }
});