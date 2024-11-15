---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import {data} from "./team.data";
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      @ Quix Labs
    </template>
    <template #lead>
      This organization is maintained by a single person.<br/>
      However, I truly appreciate all the support, feedback, and contributions from the community.<br/>
      Thank you for your continuous support!
   </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="data"/>
</VPTeamPage>
