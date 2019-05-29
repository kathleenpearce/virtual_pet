  <div>
           <form className='geneTestForm' method='POST' action='/api/breed'>
            <input
              type="text"
              name="pet1"
            />
            <input
              type="text"
              name="pet2"
            />
            <button type="submit" >Submit</button>
           </form>
           <br/>
           <form className='jobsTestForm' method='POST' action='/api/jobs'>
            <input
              type="text"
              name="pet"
            />
            <input
              type="text"
              name="job_type"
            />
            <button type="submit" >Send To Work</button>
           </form>
          </div>
        <div className='dynamicPets'>
        {this.state.petlist.map(pet => {
          return (
            <CreatureCard petStatus={pet} time={this.state.time}/>
          )
        })}
        </div>
        <div>
          <CurrentJobs time={this.state.time}/>
        </div>