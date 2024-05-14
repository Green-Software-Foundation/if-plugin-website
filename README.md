# Impact Framework Plugin Registry

**WARNING! This is source code for the plugin registry. The plugin registry is still in development and IS NOT YET LIVE. Details here may change between now and the website launch.** !


This repository is for the source code for the Impact Framework Plugin Registry website.

This is the place to raise PRs to add new plugins to the registry, comment on existing plugins, request changes and participate in plugin governance.

## Impact Framework

[Impact Framework](https://if.greensoftware.foundation/) is a tool for measuring and forecasting the environmental impacts of software applications.

Impact Framework is a minimal framework for executing pipelines of plugins, each doing some specific operation over a set of observed usage metrics.

For example, you might have access to hourly CPU utilization data for a virtual machine whose hardware you also know. Your pipeline could include a set of generic arithmetic plugins in the right order to apply the Teads TDP curve, add embodied carbon and calculate an [SCI score](https://greensoftware.foundation/articles/the-green-software-foundation-releases-alpha-version-of-software-carbon-intensity).

The ethos of Impact Framework is that the core product provides a small standard library of generic features that do things like add, subtract, multiply, file i/o, time synchronization, etc. Then, we make it as easy as possible for open-source developers to create their own plugins to support novel use cases and integrate them into IF.

To support his decentralized, permissionless plugin development, we created this registry. Here, you can raise PRs to add your plugins to our registry website so that other developers can find them, install them, and use them in their Impact Framework pipelines.


## Plugins

Plugins are discrete units of code that do some specific operation on Impact Framework data. These might be extremely simple (e.g. adding a constant to a certain value in each timestep) or they can be complex (e.g. running some proprietary model in a spawned shell). 

To ensure plugins integrate easily into Impact Framework, there are some simple rules about how they are structured. You can read about the plugin requirements [here](https://if.greensoftware.foundation/developers/how-to-build-plugins).

Each plugin is expected to be available in a Github repository and/or an npm package.

This website lists plugins so that they are discoverable for other developers who can use them in their pipelines.



## Plugin governance

We aim to list as many plugins as possible. We do not want to be gatekeepers to the registry. However, we do want to ensure some minimum thresholds of quality and safety on the site. 

Our governance model works as follows:

- new plugins are added by PR to this repository
- each PR is gated behind a short questionnaire where authors confirm some basic properties of their plugin
- the plugin lists as long as the required information is provided - the IF core team does not judge the code quality, safety or security of each plugin, we simply confirm that the required information is available.
- community participants make their own decisions about whether to download and run a plugin from the registry after reviewing the available information found via the registry
- if a plugin is found to be broken, incorrect, insecure or otherwise low quality, anyone can start a discussion about it on this repository which may lead to the plugin being delisted.
- later, we will introduce badges to help the community see useful information about plugins at a glance, e.g. a "100% unit test coverage badge", "excellent docs" badge, etc.

The IF core team take no responsibility for the safety, security or functionality of the plugins on the site. We simply provide this site and listing service to enable the community to find plugins and then do their own due diligence before choosing to download and run them. We hope that strong community governance will emerge.





## How to add a plugin

You can raise a PR to this repository. Step by step instructions are coming soon!
