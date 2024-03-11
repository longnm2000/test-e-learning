const sessionService = require("../services/session.services");

module.exports.getPercentSession = async (req, res) => {
  try {
    const { id } = req.query;
    const [result] = await sessionService.getSessionPercent(Number(id));
    const coursesIds = result.map((item) => item.courses_id);

    const sessionCounts = await Promise.all(
      coursesIds.map(async (courses_id) => {
        const [sessionCount] = await sessionService.getSessionByCourses(
          courses_id
        );
        return {
          courses_id,
          sessionCount: sessionCount.map((session) => session.total),
        };
      })
    );
    console.log(result);

    const percentSessions = sessionCounts.map((item, index) => ({
      courses_id: item.courses_id,
      percent: (result[index].completed_session / item.sessionCount[0]) * 100,
      courses_name: result[index].title,
      courses_description: result[index].description,
      image: result[index].image,
    }));

    res.status(200).json(percentSessions);
  } catch (error) {
    res.status(400).json(error);
  }
};
