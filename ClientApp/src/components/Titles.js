import React from 'react';

export default class Titles extends React.Component{
    constuctor(props){
        super(props);

        this.setState={
            titles: this.props.titles
        }
    }

    getDetails(id){
        fetch('api/titles/find/'+id)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                titleDetails: data, 
                loading: false 
            });
        });
    }

    showMoreDetail(id){
        let title = this.getDetails(id)
        l
        return(
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">{title.TitleName}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                        <h2>title.TitleName</h2> 
                        <h3>title.ReleaseYear</h3>
                        <h3>Awards</h3>
                        title.Awards.map(award => ({
                            award.Award + <br/>
                            });
                        );
                        <br/>
                        <h3>Story Line</h3>
                            title.StoryLines[0].Description
                        <br/>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const titles = this.state.titles;

        return(
            <div class="accordion" id="titlesAccordion">
                titles.map(title => ({
                    <div class="card">
                        <div class="card-header" 
                            id={title.Id}>
                            <h5 class="mb-0">
                                <button> 
                                    class="btn btn-link" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target=`$#{title.TitleId}` 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne">
                                    title.Name
                                </button>
                            </h5>
                        </div>
                    <div id={title.TitleId} class="collapse show" aria-labelledby="headingOne" data-parent="#titlesAccordion">
                    <div class="card-body">
                        {title.StoryLines[0]}
                    </div>
                    </div>
                </div>
                }))
            </div>
        )
    }
}