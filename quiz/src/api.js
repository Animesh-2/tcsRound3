
export const fetchTriviaQuestions = async (amount, category, difficulty) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching trivia questions:', error);
      return [];
    }
  };
  