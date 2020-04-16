//
//   ------------ sposób 1 --------------
// const Person = (props) => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={props.delete}>Usuń</button>
//     </li>
//   );
// };

const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      {
        id: 1,
        name: "Jan K.",
      },
      {
        id: 2,
        name: "Piotr C.",
      },
      {
        id: 3,
        name: "Marysia W.",
      },
      {
        id: 4,
        name: "John S.",
      },
    ],
  };

  // handleDelete(id) {     ----- sposób 1 -------
  //   // console.log(this, id);
  //   const people = [...this.state.people];
  //   const index = people.findIndex((person) => person.id === id);
  //   // console.log(index);

  //   people.splice(index, 1);
  //   // console.log(people);
  //   this.setState({
  //     people,
  //   });
  // }

  handleDelete = (name) => {
    // let people = Array.from(this.state.people); --- lub ---
    let people = this.state.people.slice();
    // console.log(people);
    people = people.filter((person) => name !== person.name);
    console.log(people);
    this.setState({
      people,
    });
  };

  render() {
    //  ------- sposób 1 ------
    // const people = this.state.people.map((person) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />
    // ));

    //          ------- sposób 2 ------
    // const people = this.state.people.map((person) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.name)}
    //   />
    // ));

    const people = this.state.people.map((person) => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));
    return <ul>{people}</ul>;
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
