function reactEventHandler() {
  let e = Object.values(document.querySelector("#body"))[0].stateNode;
  return e[Object.keys(e).filter((e => e.includes("reactInternalInstance")))].return.stateNode
}(() => {
  let e = document.createElement("iframe");
  document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), window.alert = e.contentWindow.alert.bind(window), e.remove()
})(), alert("WARNING: Very high XP can cause a loop of selecting a level reward over and over to the point wher the game is unplayable,\nany level 60+ automaticly wins the game."),
  a = parseInt(prompt("Enter XP:")),
  reactEventHandler().totalXp = a,
  reactEventHandler().xp = a,
  reactEventHandler().setState({
    xp: a,
    totalXp: a
  }), alert(`Set XP to ${a}.`);
