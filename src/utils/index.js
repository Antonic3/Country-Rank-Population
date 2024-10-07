export const formatPopulation = (num) => {
    const suffixes = ['B', 'M', 'K'];
    const tiers = [1_000_000_000, 1_000_000, 1_000];
  
    for (let i = 0; i < suffixes.length; i++) {
      if (num >= tiers[i]) {
        return (num / tiers[i]).toFixed(1) + suffixes[i];
      }
    }
  
    return num;
  };