type Question = {
    id: number;
    text: string;
    package: 'LOW' | 'MEDIUM' | 'HIGH';
    graphologyScore?: number; 
    candidateMatch?: number; 
  };
  
  function filterAndSortQuestions(
    questions: Question[],
    sortBy: 'graphology' | 'match' = 'graphology'
  ): Question[] {
    return questions
      .filter(q => q.package !== 'LOW')
      .sort((a, b) => {
        if (sortBy === 'graphology') {
          return (b.graphologyScore || 0) - (a.graphologyScore || 0);
        } else {
          return (b.candidateMatch || 0) - (a.candidateMatch || 0);
        }
      });
  }
  
 
  const questions: Question[] = [
    { id: 1, text: 'שאלה 1', package: 'LOW', graphologyScore: 80, candidateMatch: 90 },
    { id: 2, text: 'שאלה 2', package: 'MEDIUM', graphologyScore: 70, candidateMatch: 85 },
    { id: 3, text: 'שאלה 3', package: 'HIGH', graphologyScore: 90, candidateMatch: 95 },
    { id: 4, text: 'שאלה 4', package: 'MEDIUM', graphologyScore: 85, candidateMatch: 88 },
  ];
  
  console.log(filterAndSortQuestions(questions, 'graphology'));
  